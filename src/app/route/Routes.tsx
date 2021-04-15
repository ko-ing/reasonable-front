import { Switch, Route, Redirect } from 'react-router-dom'
import CalendarFeed from '../page/CalendarFeed';
import SignIn from '../page/SignIn';
import PhotoFeed from '../page/PhotoFeed';
import PostFeed from '../page/PostFeed';
import MyInfo from '../page/MyInfo';
import Navbar from '../component/TopBar/Navbar';
import LogobarWrapper from '../component/TopBar/Logobar';
import { getAccountIdOnCookie } from '../util/cookie';
import Stats from '../page/Stats';
import Error from '../page/Error';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addPhotos, setPhotos } from '../redux/photoAction';
import { getImageUrls } from '../util/api/photo';


const Routes = () => {
    const logoBarHeight = "45px";
    const dispatch = useDispatch();

    useEffect(() => {
        if (getAccountIdOnCookie()) {
            getImageUrls({page:0, size:15})
                .then((res: any) => {
                    dispatch(setPhotos(res.data));
                });
        }
    }, [])

    return (
        <Switch>
            {getAccountIdOnCookie() && (
                <>
                    <LogobarWrapper logoBarHeight={logoBarHeight} />
                    <Navbar logoBarHeight={logoBarHeight} />
                    <Route exact path="/"><Redirect to="/calendar"/></Route>
                    <Route exact path="/posts"  component={PostFeed} />
                    <Route exact path="/photos"  component={PhotoFeed} />
                    <Route exact path="/calendar"  component={CalendarFeed} />
                    <Route exact path="/myInfo" component={MyInfo} />
                    <Route exact path="/stats" component={Stats} />
                    <Route exact path="/error" component={Error} />
                </>
            )}
            {!getAccountIdOnCookie() && (
                <>
                    <Route exact path="/signIn" component={SignIn}/>
                    <Route path="/"><Redirect to="/signIn"/></Route>
                </>
            )}
            {/* TODO: 페이지 권한에 따라 제한 */}
        </Switch>
    );
}

export default Routes
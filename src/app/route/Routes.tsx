import { Switch, Route, Redirect } from 'react-router-dom'
import SignIn from '../page/SignIn';
import Calendar from '../page/Calendar';
import PhotoFeed from '../page/PhotoFeed';
import PostFeed from '../page/PostFeed';
import MyInfo from '../page/MyInfo';
import Navbar from '../component/Navbar';
import LogobarWrapper from '../component/Logobar';
import { getAccountIdOnCookie } from '../util/cookie';
import Stats from '../page/Stats';


const Routes = () => {
    const logoBarHeight = "50px";

    return (
        <Switch>
            {getAccountIdOnCookie() && (
                <>
                    <LogobarWrapper logoBarHeight={logoBarHeight} />
                    <Route exact path="/"><Redirect to="/calendar"/></Route>
                    <Route exact path="/posts"  component={PostFeed} />
                    <Route exact path="/photos"  component={PhotoFeed} />
                    <Route exact path="/calendar"  component={Calendar} />
                    <Route exact path="/myInfo" component={MyInfo} />
                    <Route exact path="/stats" component={Stats} />
                    <Navbar logoBarHeight={logoBarHeight} />
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
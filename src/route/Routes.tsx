import { Switch, Route, Redirect } from 'react-router-dom'
import SignIn from '../app/page/SignIn';
import Calendar from '../app/page/Calendar';
import PhotoFeed from '../app/page/PhotoFeed';
import PostFeed from '../app/page/PostFeed';
import Navbar from '../component/Navbar';
import { getAccountIdOnCookie } from '../util/cookie';

const Routes = () => {
    return (
        <Switch>
            {getAccountIdOnCookie() && (
                <>
                    <Route exact path="/"><Redirect to="/calendar"/></Route>
                    <Route exact path="/posts"  component={PostFeed} />
                    <Route exact path="/photos"  component={PhotoFeed} />
                    <Route exact path="/calendar"  component={Calendar} />
                    <Navbar />
                </>
            )}
            {!getAccountIdOnCookie() && (
                <>
                    <Route exact path="/"><Redirect to="/signIn"/></Route>
                    <Route exact path="/signIn" component={SignIn}/>
                </>
            )}
            {/* TODO: 페이지 권한에 따라 제한 */}
        </Switch>
    );
}

export default Routes

export const authConfig = {
    pages:{
        signIn : "/login",
    },
    providers:[],
    callbacks : {
        authorized({auth,request}){
            const isLoggedin = auth?.user;
            const isOnDashboard = request.nextUrl.pathname.startsWith('/dashboard');

            if(isOnDashboard)
                {
                    if(isLoggedin)
                    {
                        return true; // both logged in and on Dashboard page
                    }

                    return false;  // not logged in , so no authorization
                }
            else if(isLoggedin)
                {
                    return Response.redirect(new URL("/dashboard" , request.nextUrl));
                }
            return true;
        },
    },
};

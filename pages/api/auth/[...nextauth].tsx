import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  providers: [
    GoogleProvider({
        clientId: '455283489928-77aaeqsibe42kcvsstd5ggskoriu96i3.apps.googleusercontent.com',
        clientSecret: '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'
      }),
      // FacebookProvider({
      //     clientId: '1210652909465969',
      //     clientSecret: '3845f045e62a04aa6a5bad5727b68215'
      //   })
  ],
})
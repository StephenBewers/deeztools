import NextAuth from "next-auth";

export const authOptions = {
  providers: [
    {
      id: "deezer",
      name: "Deezer",
      type: "oauth",
      authorization: {
        url: "https://connect.deezer.com/oauth/auth.php",
        params: { perms: "basic_access,manage_library" },
      },
      token: {
        async request({ provider, params }) {
          const response = await fetch(
            `https://connect.deezer.com/oauth/access_token.php?${new URLSearchParams({
              app_id: provider.clientId,
              secret: provider.clientSecret,
              code: params.code,
            })}`
          )
          const data = new URLSearchParams(await response.text())
    
          return {
            tokens: {
              access_token: data.get("access_token"),
              expires_at: Math.ceil(Date.now() / 1000 + +data.get("expires")),
            },
          }
        },
      },
      clientId: process.env.DEEZER_ID,
      clientSecret: process.env.DEEZER_SECRET,
      userinfo: {
        url: "https://api.deezer.com/user/me",
        request({ tokens, client }) {
          const { access_token } = tokens
          return client.userinfo(access_token, { params: { access_token } })
        },
      },
      profile(profile) {
        return {
          id: profile.id,
          name: profile.name,
          image: profile.picture_small,
        }
      },
    },
  ],
  session: {
    maxAge: 3600, // 1 hour
    generateSessionToken: () => {
      return randomUUID?.() ?? randomBytes(32).toString("hex")
    }
  },
};

export default NextAuth(authOptions);

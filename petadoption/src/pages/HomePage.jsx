// HomePage

import { useState, useEffect, useRef} from "react";
import axios


from "axios";
function HomePage() {

    axios
    .post("https://api.petfinder.com/v2/oauth2/token", {
      grant_type: "client_credentials",
      client_id: "4DGlwJeQ8YkWauujvdtUvUgDNnD1fbpB649Cl0Yfgzill95yid",
      client_secret: "Xvj1Zmdgc6yZgLBLZMXNt3s5vkLORgBjCvaJZjHp",
      headers: { "Content-Type": "application/json" },
    })
    .then((res) => {
      res.data.access_token;
    });
  
    axios.get("https://api.petfinder.com/v2/animals", {
      headers: {
        Authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0REdsd0plUThZa1dhdXVqdmR0VXZVZ0RObkQxZmJwQjY0OUNsMFlmZ3ppbGw5NXlpZCIsImp0aSI6IjA4ZDk2YWViZmUxMWMxNmNhN2ZiZGU4MGNmNzk0Zjc0ZTg1NThkMTIzYzY0Y2Q2MDdiMjg1MzdmMDM5ZDI1YmZmNDRhZjRhNjczNmE2ZGQ5IiwiaWF0IjoxNjg3NjIzNzk5LCJuYmYiOjE2ODc2MjM3OTksImV4cCI6MTY4NzYyNzM5OSwic3ViIjoiIiwic2NvcGVzIjpbXX0.tiMYoFPvwhPmDSVDu6Q6MgOk2vM2LFHup3n1mJZGe9WiHPXzQyQ9BYVnSri_cRObuaUZolTug60Z7u315Q3Xsv7WQJiMcBf6MeldWKXywHaTofx9-1PSDqITlqZaRuTtp7AAnpAqsKNp9YJbJU2O8bUb9BiQVnlcPU6jnfEpnzbWMhKFRyeR1-BgnN280axSJLs3QgESBzNHVSEZPsxcJirAtj8gFcoQizrUkpHGVmEmQaRirlscsj2mu50Kh2QQp-zGGDRVXTe9zfvFtPAyci3QUC3Qkm1FH4YPJ558btLwvKyXQLdlQLND4kUBepC63Zp5L3GzZR6vyxc_Ye-wAw",
      },
    });
  

    return (
        <h1>Home Page</h1>
    )
}


export default HomePage;
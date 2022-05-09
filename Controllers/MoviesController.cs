using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Net.Http;
using System.Net.Http.Headers;

namespace movies_app.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MoviesController : ControllerBase
    {
      
        private static readonly HttpClient client = new HttpClient();

        [HttpGet]
        public async Task<string> Get(string search)
        {
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(
                new MediaTypeWithQualityHeaderValue("application/vnd.github.v3+json"));
            client.DefaultRequestHeaders.Add("User-Agent", ".NET Foundation Repository Reporter");

            if(search==null)
                search = "brother";

            //var stringTask = client.GetStringAsync("http://www.omdbapi.com/demo.aspx/?t="+search+"&token=03AGdBq25ZRbT4m4v5zfMHgeBPbAVEGruPWKmzIcuKZKlOrbqGCLMmsv1OK926QgTf1Kc57qFXnD33_ovX6QoDC5eK5iLzbIb4F96ejiboNr8X_qswLv4iV7gtEZb-ubeD1t1MHBwCqiLe1KLm1kgi9TpkeKjNGCWsNsZ9RtITenUgQzACK3BxItzhYHlxbiSLUSwebEYE4EXq99eOu5LzyFhtPYEA5ucQFNeKpUADeBETkp8Kd-2PYNPyshBchT9cyE08tKeECEVsMidhfc73bBmAsI18bzTMt1Ub5T9AHdSVaIXW-FZeJeL5uMoUwRgCVHKWiik85mySVkILVuAGW9C4XPbgygXGpu44DCE7DHZ6lUcmNeTcckFT3ZSZRUoKUwREXWsEmQLCA0jyPQK5WHnraUbkKDixwPaByaFdR5iszjN7CfhlElEDkjU_5fbfqqtxnURKykKQ_68vr_TSIg-9pEVPed_fZZa5-m2gAZKQSIBPCOdDUCLjf3X5gb23tIIoK-FE1zjy");
            var stringTask = client.GetStringAsync("https://www.omdbapi.com/?i=tt3896198&apikey=a76e8493&s="+search);

//https://www.omdbapi.com/?i=tt3896198&apikey=a76e8493&s=guardians
            var msg = await stringTask;
            return msg;
        }
    }
}

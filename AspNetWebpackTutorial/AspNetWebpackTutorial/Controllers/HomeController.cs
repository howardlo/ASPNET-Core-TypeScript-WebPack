﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AspNetWebpackTutorial.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index() => View();

        public string Error() => "Error";
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ToDoApplication.Models;
using ToDoApplication.Repo;
using ToDoApplication.Repo.Interfaces;

namespace ToDoApplication.Controllers
{
    public class ItemController : Controller
    {
        public iItemRepository itemRepo = new ItemRepository();
        
        // GET: Item
        public ActionResult Index()
        {
            return View();
        }
        [Route("/Item/GetList")]
        public ActionResult GetList()
        {
            List<ToDoItem> itemList = itemRepo.GetItemList();

            return Json(itemList, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult SaveNewItem(string itemName)
        {
            ToDoItem newItem = itemRepo.SaveNewItem(itemName);
            return Json(newItem);
        }
        [HttpPost]
        public ActionResult CompleteItem(int itemID)
        {
            itemRepo.CompleteItem(itemID);
            return Json(itemID);
        }
        [HttpPost]
        public ActionResult UpdateItem(ToDoItem item)
        {
            ToDoItem updatedItem = itemRepo.UpdateItem(item);
            return Json(updatedItem);
        }
    }
}
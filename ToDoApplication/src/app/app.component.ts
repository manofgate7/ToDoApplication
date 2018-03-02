import { Component } from '@angular/core';
import { Http } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _httpService: Http) { }

  title = 'TO-DO List';
  items;
  newItem : string = "";
  isAdding : boolean = false;

  ngOnInit() {
     this._httpService.get('/Item/GetList').subscribe(values => {
        this.items = values.json();
     });
  }

  changeItem(item, isEditing:boolean) : void {
    if(isEditing){
      item.isEditing = true;
      item.changedItem = item.ItemName;
    }else{
      item.isEditing = false;
      item.changedItem = null;
    }
  }
  cancelNew() : void {
    this.isAdding = false;
    this.newItem = "";
  }

  saveNewItem(): void {
    var data = {
      itemName: this.newItem,
    };
    this._httpService.post('/Item/SaveNewItem', data)
        .subscribe( item => {
          this.items.push(item.json());
          this.isAdding = false;
          this.newItem = "";
          }
        );
  }

  complete(itemID) : void {
    var data = {
      itemID: itemID,
    };
    this._httpService.post('/Item/CompleteItem', data)
        .subscribe( itemID => {
          var loc = this.items.findIndex(item => item.ItemID === itemID.json());
          if (loc > -1) {
            this.items.splice(loc, 1);
          }
          }
        );
  }

  saveItem(itemObject): void {
    var changedItem = {
      ItemID: itemObject.ItemID,
      ItemName : itemObject.changedItem
    }
    var data = {
      item: changedItem,
    };
    this._httpService.post('/Item/UpdateItem', data)
        .subscribe( item => {
           var nItem = item.json()
          var loc = this.items.findIndex(itemL => itemL.ItemID === nItem.ItemID);
          if (loc > -1) {
            this.items[loc].changedItem = ""
            this.items[loc].isEditing = false;
            this.items[loc].ItemName = nItem.ItemName;
          }
        }
        );
  }

}

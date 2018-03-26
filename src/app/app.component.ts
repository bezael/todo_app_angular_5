import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
todoArray=[];

guardarTarea(value:any){
  if(value !==""){
    this.todoArray.push(value);
    console.log(this.todoArray);
  }else{
    alert('El campo tarea es requerido.')
  }
}
borrarTarea(item){
  for(let i=0; i <= this.todoArray.length; i++){
    if(item == this.todoArray[i]){
      this.todoArray.splice(i,1);
    }
  }
}


}

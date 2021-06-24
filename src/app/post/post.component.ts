import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[]=[];
 status=true;
 post={
   userId:0,
   id:0,
   title:'',
   body:''
 };
  constructor(private postService:PostService) { 
    
  }
 form= new FormGroup({
    title: new FormControl('',[Validators.required, Validators.minLength(6)]),
    body:new FormControl('',[Validators.required, Validators.minLength(10)])
})
get title(){
  return this.form.get('title');
}
get body(){
  return this.form.get('body');
}
  ngOnInit(): void {
    this.getUrl();
  }
  getUrl(){
    this.postService.getAll()
    .subscribe(posts =>this.posts=posts,
     error=>{
      alert('erreur inattendue')
      console.log(error);})
  }
  creatPost(){
    this.postService.creat(this.post).subscribe(newPost=>
      {this.post.id=newPost.id;
        //unshift ajouter un element au debut dans un tableau
        //push ajouter au queu de tableau
        this.posts.unshift(this.post);
        this.post={
          userId:0,
          id:0,
          title:'',
          body:''
        };
      
  },(error:HttpErrorResponse)=>{
    if(error instanceof ErrorEvent){
      alert('on peut pas creer ce post avec des champs vide');
    }else{
      alert('erreur inattendue')
      console.log(error);};
    })
}
  onEdit(post){
    this.post=post;
    this.status=false;
  }
  deletePost(post){
    this.postService.delete(post).subscribe(() =>{
      let index =this.posts.indexOf(post);
      this.posts.splice(index,1)},(error:HttpErrorResponse)=>{
        if(error instanceof ErrorEvent){
          alert('ce post est déja supprimé');
        }else{
          alert('erreur inattendue')
          console.log(error);};
        }
        )
        

  }
  updatePost(post){
    console.log(post.id);
    this.postService.update(post).subscribe(()=>
      {
        
        
        //unshift ajouter un element au debut dans un tableau
        //push ajouter au queu de tableau
        // this.posts.unshift(this.post);
        this.post={
          userId:0,
          id:0,
          title:'',
          body:''
        }
        this.status=true;
      
  })
  
  }}

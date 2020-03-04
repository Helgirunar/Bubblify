import React, { Component } from 'react';
import About from "../../components/about";

export class AboutView extends Component{
  render(){
    return(
        <div className='about'>
            <div className='peach-img'>
                <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/78fc2c2a-516b-44c7-b8ab-2f525a20cf70/d7ctpij-d864f8d1-e10d-4599-9693-10fb65ae3515.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc4ZmMyYzJhLTUxNmItNDRjNy1iOGFiLTJmNTI1YTIwY2Y3MFwvZDdjdHBpai1kODY0ZjhkMS1lMTBkLTQ1OTktOTY5My0xMGZiNjVhZTM1MTUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sbu8-nmCi5kelSgca40zQ3FIwzLTVaBKZocRk4U0ytc' alt={'princess peach'}/>
            </div>
        <div><p>Welcome to our beautiful page where we sell amazing bubbles !</p></div>
        </div>

    )}
}
export default AboutView;

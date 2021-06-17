'use strict'

// $(document).ready(init);

// function init() {
//     console.log('Started...');
//     renderProj()
// }
//var x = document.querySelector('row');
//console.log('nmbm',x);


var gstrHTML=   `<div class="col-md-4 col-sm-6 portfolio-item">
{ <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
  <div class="portfolio-hover">
    <div class="portfolio-hover-content">
      <i class="fa fa-plus fa-3x"></i>
    </div>
  </div>
  <img class="img-fluid" src="img/projs/1.png" alt="">
</a>
<div class="portfolio-caption">
  <h4>Threads</h4>
  <p class="text-muted">Illustration</p>
</div>
</div> `; 



//`<img src="img\projs\1.png" width= "300" height= "400"  ></img>`;


//$('.row2').html(gstrHTML)


// var $elBox = $('.row2');

// $elBox.html(` <div class="col-md-4 col-sm-6 portfolio-item">
//  <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
//    <div class="portfolio-hover">
//      <div class="portfolio-hover-content">
//        <i class="fa fa-plus fa-3x"></i>
//      </div>
//    </div>
//    <img class="img-fluid" src="img/projs/4.png"  alt="">
//  </a>
//  <div class="portfolio-caption">
//    <h4>Threads</h4>
//    <p class="text-muted">Illustration</p>
//  </div>
// </div> `);



//function renderProject(){

//     `<div class="col-md-4 col-sm-6 portfolio-item">
//     <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
//       <div class="portfolio-hover">
//         <div class="portfolio-hover-content">
//           <i class="fa fa-plus fa-3x"></i>
//         </div>
//       </div>
//       <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
//     </a>
//     <div class="portfolio-caption">
//       <h4>Threads</h4>
//       <p class="text-muted">Illustration</p>
//     </div>
//   </div> `


//}




// `<div class="col-md-4 col-sm-6 portfolio-item">
// { <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
//   <div class="portfolio-hover">
//     <div class="portfolio-hover-content">
//       <i class="fa fa-plus fa-3x"></i>
//     </div>
//   </div>
//   <img class="img-fluid" src="img/team/1.jpg" alt="">
// </a>
// <div class="portfolio-caption">
//   <h4>Threads</h4>
//   <p class="text-muted">Illustration</p>
// </div>
// </div> `; 

 renderProj();

function renderProj() {

  var projects = getProjects()
  console.log(projects);
  var strHTML = projects.map(function(proj) {
      return `<div class="col-md-4 col-sm-6 portfolio-item" >
          <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
              <div class="portfolio-hover">
                  <div class="portfolio-hover-content">
                      <i class="fa fa-plus fa-3x"></i>
                  </div>
              </div>
              <img class="img-fluid"  src="img/projs/${proj.id}.png" alt="">
          </a>
          <div class="portfolio-caption">
              <h4>${proj.name}</h4>
              <p class="text-muted">${proj.title}</p>
          </div>
       </div>`
  }).join('')
  $('.row2').html(strHTML)

}


function renderModal(){

}
'use strict'
$(init)

function init() {
  renderProj();
  renderModal();
  $('.send-btn').click(mailMe)
}



function renderProj() {

  const projects = getProjects()
  console.log(projects);
  const strHTML = projects.map(function(proj) {
      return `<div class="col-md-4 col-sm-6 portfolio-item" >
                  <a class="portfolio-link" data-toggle="modal" href="#${proj.modal}">
                      <div class="portfolio-hover">
                          <div class="portfolio-hover-content">
                              <i class="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img class="img-fluid"  src="img/projs/${proj.id}.PNG" alt="">
                  </a>
                  <div class="portfolio-caption">
                      <h4>${proj.name}</h4>
                      <p class="text-muted">${proj.desc}</p>
                  </div>
              </div>`
  }).join('')
  $('.row2').html(strHTML)

}


function renderModal(){
  const projects = getProjects()

  const strHTML = projects.map(function(proj) {
    // return  `<div class="portfolio-modal modal fade" id="portfolioModal3" tabindex="-1" role="dialog" aria-hidden="true">
    return  `<div class="portfolio-modal modal fade" id="${proj.modal}" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal">
                      <div class="lr">
                        <div class="rl"></div>
                      </div>
                    </div>
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-8 mx-auto">
                          <div class="modal-body">
                            <!-- Project Details Go Here -->
                            <h2>${proj.name}</h2>
                            <p class="item-intro text-muted">${proj.name}.</p>
                            <img class="img-fluid-on d-block mx-auto"  src="img/projs/${proj.id}.png"  alt="">
                            <ul class="list-inline">
                            <p>${proj.title}</p>
                              <li> ${proj.Category}</li>
                              <a href="${proj.url}" target="_blank">link to Project</a>  
                            </ul>
                            <button class="btn btn-primary" data-dismiss="modal" type="button">
                                <i class="fa fa-times"></i>
                                Close Project</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </div>  `
}).join('')
$('.modalBox').html(strHTML)
}


function mailMe() {
  console.log('hey');
  var subject = $('input[name=subject]').val()
  var body = $('textarea[name=comment]').val().replace(/\n/g, `%0d%0a`)
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=omer.golan.dev@gmail.com&su=${subject}&body=${body}`)

}

'use strict';

$(onRenderPorts());


function onRenderPorts() {
    renderProjs();
}

function renderProjs() {
    var ports = getProjs();

    var strHTML = ports.map(function (item) {
        return `<div class="col-md-4 col-sm-6 mr-3 portfolio-item"           data-proj-id="${item.id}">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="updatePortModal('${item.id}')">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="img/portfolio/${item.id}-preview.jpg" alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${item.name}</h4>
                        <p class="text-muted">${item.title}</p>
                    </div>
                </div>`
    }).join('');

    $('#portfolio > .container .portfolios-cont').html(strHTML);
}

function updatePortModal(projId) {
    var proj = getProj(projId);
    console.log('proj:', proj);
    var $projModal = $('.portfolio-modal');

    //render details:
    $projModal.find('.proj-name').html(proj.name);
    $projModal.find('.proj-title').html(proj.title);
    $projModal.find('.proj-img').attr('src', `img/portfolio/${proj.id}.jpg`);
    $projModal.find('.proj-desc').html(proj.desc);
    $projModal.find('.proj-client').html(`Client: ${proj.client}`);
    $projModal.find('.proj-category').html(`Category: ${proj.category}`);


    //render created at:
    var date = new Date(proj.publishedAt);
    $projModal.find('.proj-date').html(`Date: ${getMonthName(date.getMonth())} ${date.getFullYear()}`);

    //update proj url:
    $projModal.find('.proj-btn').html(proj.name);
    $projModal.find('.proj-btn').attr('onclick', `moveToProjSite('${proj.id}')`);

}

function moveToProjSite(projId) {
    var proj = getProj(projId);
    window.location = proj.url;
}

function onContactSubmit() {
    console.log('clicked')
    var email = document.querySelector('#contact [name=email]').value;
    var subject = document.querySelector('#contact [name=subject]').value;
    var body = document.querySelector('#contact [name=body]').value;
    console.log('email:', email);
    console.log('subject:', subject);
    console.log('body:', body);
    if (email && subject && body) {
        contactSubmit(email, subject, body);
    } else {
        onSubmitFailed();
    }
}

function contactSubmit(email, subject, body) {
    var strURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    window.location = strURL;
}

function onSubmitFailed() {
    var $failMessage = document.querySelector('.contact-failed-message');
    $failMessage.classList.remove('hide');
}

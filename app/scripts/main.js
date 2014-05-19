var getNameTemplate = _.template($('.repositories').text());

$.getJSON('https://api.github.com/users/lancegputnam/repos').done(function(repos){
    renderRepos(repos);
});

////////////// This function renders the main content on the page //////////////////////////
function renderRepos (repos){
    repos.forEach(function(repo){

        var rendered = getNameTemplate(repo);

        $('.mainbar').append(rendered);
    });
}

////////// This renders the sidebar content on the page ///////////////
var getProfileTemplate = _.template($('.profile').text());
$.getJSON('https://api.github.com/users/lancegputnam').done(function(profile){
    renderProfile(profile);
});

function renderProfile (profile){
        var rendered = getProfileTemplate(profile);
        $('.sidebar').append(rendered);
    }


























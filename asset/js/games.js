





// Open Card Reveal Click
$('.open-button').click(function(){
    $(this).siblings('.card-reveal').toggleClass('open');
  });
  
  // Close Card Reveal Click
  $('.close-button').click(function(){
    $(this).parent().parent('.card-reveal').toggleClass('open');
  });


function enter() {
    onclick="location.href='games.html';";
}

window.addEventListener('load', function() {
    var searchBar = document.querySelector("#search");

    searchBar.addEventListener('keyup', function(event) {
        console.log(searchBar.value)
        if(event.key == 'Enter') {
            fetch('https://cors-anywhere.herokuapp.com/http://www.gamespot.com/api/reviews/?api_key=d5f9d95899dd3f623ef0db6a138808c83f7967cd&format=json&filter=title:' 
            + encodeURIComponent(searchBar.value)
            )
            
            
            .then(function(searchBar) {
                return searchBar.json();
                
            })
            .then(function(data) {
                console.log(data);
                
                

                var resultsRes = data.results[0].release_date;
                var resultsName = data.results[0].name;
                var resultsDes = data.results[0].description;
                var resultsImage = data.results[0].image.original;
                document.getElementById("results").innerHTML = resultsRes;
                document.getElementById("results").innerHTML = resultsName;
                document.getElementById("results").innerHTML = resultsDes;
                document.getElementById("results").innerHTML = `<img src = ` + resultsImage + `>`;

                console.log('result')
            })
            searchBar.value = "" 
        }
    });
});





// fetch('https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/', {
//   headers: {
//     'user-key': '21bc044a492256eb1717ed91dd67cbc1'
//   }
// })
//   .then(data => data.json())
//   .then(response => console.log(response));

//   fetch('https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games', {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'user-key': '21bc044a492256eb1717ed91dd67cbc1'
//     },
//     body:
//       'fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;'
//   })
//     .then(data => data.json())
//     .then(response => console.log(response));



    // fetch('https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games/', {
    //   method: 'POST',
    //   headers: {
    //     Accept: 'application/json',
    //     'user-key': '21bc044a492256eb1717ed91dd67cbc1'
    //   },
    //   body: 'search "fallout"; '
    // })
    //   .then(data => data.json())
    //   .then(response => console.log(response));

    // &filter=name:skyrim


// fetch('https://cors-anywhere.herokuapp.com/http://www.gamespot.com/api/games/?api_key=d5f9d95899dd3f623ef0db6a138808c83f7967cd&format=json&filter=name:' 
// + searchBar + 'd5f9d95899dd3f623ef0db6a138808c83f7967cd')

// // Add another fetch call to filter by genre.
// fetch('https://cors-anywhere.herokuapp.com/http://www.gamespot.com/api/games/?api_key=d5f9d95899dd3f623ef0db6a138808c83f7967cd&format=json&filter=genres:' 
// + searchBar.value)


// .then(function(searchBar) {
//     return searchBar.json();
    
// })
// .then(function(data) {
//     console.log(data);
// })


// fetch("https://cors-anywhere.herokuapp.com/https://whatoplay.p.rapidapi.com/game/?game_id=%3Crequired%3E", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "whatoplay.p.rapidapi.com",
// 		"x-rapidapi-key": "6163485b7bmsh9693ebb0587cf03p1d5ee0jsn4d2061252a39"
// 	}
// })
// .then(function(response) {
//   return response.json();
// })
// .then(function(data) {
//   console.log(data);
// })
// .catch(err => {
// 	console.log(err);
// });

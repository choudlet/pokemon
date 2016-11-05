$(document).ready(function(){
//var music2 = document.getElementById("music2");
//music2.play();
$('.searchbutton').click(pickPokemon);
$('.searchbutton2').click(pickPokemon2);
$('.random1').click(pickRandom1);
$('.random2').click(pickRandom2);
$('select').change(comparePokemon);
});

// how do I get this to work with figcaption text
function capitalize(string) {
  for (i=0;i<string.length;i++) {
    if (i === 0) {
      string[i] = string[i].toUpperCase();
    } else string[i] = string[i];
  }
}

function pickPokemon() {
  $('.attribute').val('default');
  $('.response').html('');
  $('.bothhp, .bothattack, .bothdefense, .bothspeed, .bothsa, .bothsd').css('font-size', 14);
  $('.bothhp, .bothattack, .bothdefense, .bothspeed, .bothsa, .bothsd').css('color', 'black');
  pokeFind = $('.search').val();
  $('.search').val('');
  $.get("http://pokeapi.co/api/v2/pokemon/" + pokeFind, function(data){
    console.log(data);
    $('.pic1').attr('src', data.sprites.front_default);
    $('.poke1name').text(data.name);
    $('.poke1speed').text(" "+ data.stats[0].base_stat);
    $('.poke1sd').text(" "+ data.stats[1].base_stat);
    $('.poke1sa').text(" "+ data.stats[2].base_stat);
    $('.poke1defense').text(" "+ data.stats[3].base_stat);
    $('.poke1attack').text(" "+ data.stats[4].base_stat);
    $('.poke1hp').text(" "+ data.stats[5].base_stat);
  });
}

function pickPokemon2() {
  $('.attribute').val('default');
  $('.response').html('');
  $('.bothhp, .bothattack, .bothdefense, .bothspeed, .bothsa, .bothsd').css('font-size', 14);
  $('.bothhp, .bothattack, .bothdefense, .bothspeed, .bothsa, .bothsd').css('color', 'black');
  pokeFind2 = $('.search2').val();
  $('.search2').val('');
$.get("http://pokeapi.co/api/v2/pokemon/" + pokeFind2, function(data){
  console.log(data);
  $('.pic2').attr('src', data.sprites.front_default);
  $('.poke2name').text(data.name);
  $('.poke2speed').text(" "+ data.stats[0].base_stat);
  $('.poke2sd').text(" "+ data.stats[1].base_stat);
  $('.poke2sa').text(" "+ data.stats[2].base_stat);
  $('.poke2defense').text(" "+ data.stats[3].base_stat);
  $('.poke2attack').text(" "+ data.stats[4].base_stat);
  $('.poke2hp').text(" "+ data.stats[5].base_stat);
});
}

function pickRandom1() {
  $('.attribute').val('default');
  $('.response').html('');
  $('.bothhp, .bothattack, .bothdefense, .bothspeed, .bothsa, .bothsd').css('font-size', 14);
  $('.bothhp, .bothattack, .bothdefense, .bothspeed, .bothsa, .bothsd').css('color', 'black');
  pokeFindRandom1 = Math.floor((Math.random() * 721) + 1);
  $.get("http://pokeapi.co/api/v2/pokemon/" + pokeFindRandom1, function(data){
    console.log(data);
    $('.pic1').attr('src', data.sprites.front_default);
    $('.poke1name').text(data.name);
    $('.poke1speed').text(" "+ data.stats[0].base_stat);
    $('.poke1sd').text(" "+ data.stats[1].base_stat);
    $('.poke1sa').text(" "+ data.stats[2].base_stat);
    $('.poke1defense').text(" "+ data.stats[3].base_stat);
    $('.poke1attack').text(" "+ data.stats[4].base_stat);
    $('.poke1hp').text(" "+ data.stats[5].base_stat);
  });

}

function pickRandom2() {
  $('.attribute').val('default');
  $('.response').html('');
  $('.bothhp, .bothattack, .bothdefense, .bothspeed, .bothsa, .bothsd').css('font-size', 14);
  $('.bothhp, .bothattack, .bothdefense, .bothspeed, .bothsa, .bothsd').css('color', 'black');
  pokeFindRandom1 = Math.floor((Math.random() * 721) + 1);
  $.get("http://pokeapi.co/api/v2/pokemon/" + pokeFindRandom1, function(data){
    console.log(data);
    $('.pic2').attr('src', data.sprites.front_default);
    $('.poke2name').text(data.name);
    $('.poke2speed').text(" "+ data.stats[0].base_stat);
    $('.poke2sd').text(" "+ data.stats[1].base_stat);
    $('.poke2sa').text(" "+ data.stats[2].base_stat);
    $('.poke2defense').text(" "+ data.stats[3].base_stat);
    $('.poke2attack').text(" "+ data.stats[4].base_stat);
    $('.poke2hp').text(" "+ data.stats[5].base_stat);
  });

}

function comparePokemon() {
  $('.response').html('');
  $('.bothhp, .bothattack, .bothdefense, .bothspeed, .bothsa, .bothsd').css('font-size', 14);
  $('.bothhp, .bothattack, .bothdefense, .bothspeed, .bothsa, .bothsd').css('color', 'black');
  currentAttribute = $('select').val();
  if (($('.poke1name').text() === "Unknown") || ($('.poke2name').text() === "Unknown")) {
    alert('Please submit both Pokemon');
  } else switch(currentAttribute) {
    case "hp":
      $('.bothhp').css('font-size', 20);
      $('.bothhp').css('color', 'purple');
      hp1 = parseInt($('.poke1hp').text());
      hp2 = parseInt($('.poke2hp').text());
      if (hp1 > hp2) {
        $('.response').append($('.poke1name').text()+ "'s HP of " + hp1 + " is greater than " + $('.poke2name').text() + "'s HP of " + hp2);
      } else $('.response').append($('.poke2name').text()+ "'s HP of " + hp2 + " is greater than " + $('.poke1name').text() + "'s HP of " + hp1);
      break;
    case "attack":
      $('.bothattack').css('font-size', 20);
      $('.bothattack').css('color', 'purple');
      attack1 = parseInt($('.poke1attack').text());
      attack2 = parseInt($('.poke2attack').text());
      if (attack1 > attack2) {
        $('.response').append($('.poke1name').text()+ "'s attack of " + attack1 + " is greater than " + $('.poke2name').text() + "'s attack of " + attack2);
      } else $('.response').append($('.poke2name').text()+ "'s attack of " + attack2 + " is greater than " + $('.poke1name').text() + "'s attack of " + attack1);
      break;
    case "defense":
      $('.bothdefense').css('font-size', 20);
      $('.bothdefense').css('color', 'purple');
      defense1 = parseInt($('.poke1defense').text());
      defense2 = parseInt($('.poke2defense').text());
      if (defense1 > defense2) {
        $('.response').append($('.poke1name').text()+ "'s defense of " + defense1 + " is greater than " + $('.poke2name').text() + "'s defense of " + defense2);
      } else $('.response').append($('.poke2name').text()+ "'s defense of " + defense2 + " is greater than " + $('.poke1name').text() + "'s defense of " + defense1);
      break;
    case "speed":
      $('.bothspeed').css('font-size', 20);
      $('.bothspeed').css('color', 'purple');
      speed1 = parseInt($('.poke1speed').text());
      speed2 = parseInt($('.poke2speed').text());
      if (speed1 > speed2) {
        $('.response').append($('.poke1name').text()+ "'s speed of " + speed1 + " is greater than " + $('.poke2name').text() + "'s speed of " + speed2);
      } else $('.response').append($('.poke2name').text()+ "'s speed of " + speed2 + " is greater than " + $('.poke1name').text() + "'s speed of " + speed1);
      break;
    case "sa":
      $('.bothsa').css('font-size', 20);
      $('.bothsa').css('color', 'purple');
      sa1 = parseInt($('.poke1sa').text());
      sa2 = parseInt($('.poke2sa').text());
      if (sa1 > sa2) {
        $('.response').append($('.poke1name').text()+ "'s Special Attack of " + sa1 + " is greater than " + $('.poke2name').text() + "'s Special Attack of " + sa2);
      } else $('.response').append($('.poke2name').text()+ "'s Special Attack of " + sa2 + " is greater than " + $('.poke1name').text() + "'s Special Attack of " + sa1);
      break;
    case "sd":
      $('.bothsd').css('font-size', 20);
      $('.bothsd').css('color', 'purple');
      sd1 = parseInt($('.poke1sd').text());
      sd2 = parseInt($('.poke2sd').text());
      if (sd1 > sd2) {
        $('.response').append($('.poke1name').text()+ "'s Special Defense of " + sd1 + " is greater than " + $('.poke2name').text() + "'s Special Defense of " + sd2);
      } else $('.response').append($('.poke2name').text()+ "'s Special Defense of " + sd2 + " is greater than " + $('.poke1name').text() + "'s Special Defense of " + sd1);
      break;
  }
}

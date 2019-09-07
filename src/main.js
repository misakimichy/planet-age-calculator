import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { User, Planet } from './app';

// Frontend logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    const inputAge = parseInt($("input#age").val());
    const inputCountry = $("select#country").val();
    const inputPlanet = $("select#planet").val();

    const user = new User(inputAge, inputCountry);
    const planet = new Planet(inputPlanet);

    try {
      $(".result").show();
      $(".planet").text(planet.name);

      const result = planet.calculateAges(user);
      $(".age").text(result.planetAge);
      $(".years-left").text(result.yearsToLive);
    } catch (error) {
      alert(error.message);
    }
  });
});
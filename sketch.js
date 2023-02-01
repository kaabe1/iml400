$(document).ready(function () {
  var divs = $('div[id^="content-"]').hide(),
    i = 0;

  (function cycle() {
    divs.eq(i).fadeIn(500).delay(1200).fadeOut(500, cycle);

    i = ++i % divs.length;
  })();

  $("#hula-doll").click(function () {
    alert("Cultural Prostitution is a term coined by Haunani-Kay Trask— Hawaiʻi’s beloved Kanaka Maoli activist, educator and Hawaiian sovereignty movement leader. Hula is one of many aspects of Native Hawaiian culture that has been exploited for tourism. Hula— an ancient, spiritual and storytelling art form, has been altered into image of young girls in coconut shaped bras and grass skirts.In the hotel version of the hula, the sacredness of the dance has completely evaporated while the athleticism and sexual expression have been packaged like ornaments. The purpose is entertainment for profit rather than a joyful and truly Hawaiian celebration of human and divine nature");
  });

  $("#matson-ad").click(function () {
    alert(
"From the founding of tourism, white wealthy businessmen found Hawaiʻi to be another “business opportunity that was waiting to be exploited” (Mak 20). As air travel developed, investors such as Matson— yes, the shipping company— built the, “most upscale hotels in Waikiki” to establish short-term residents homes and make Hawaiʻi a prime destination for family vacations (Mak 48). Additionally, hundreds and thousands of dollars were poured into marketing Hawaiʻi to the mainland."    );
  });

  $("#united-ad").click(function () {
    alert("As the United Airlines Ad says “Our Little Corner of the World” Hawaiʻi has been claimed by the white American market as “theirs” to consume. The images of primitive life also attributes to the romanticization of “paradise” and portrayal of Hawaiʻi as an escape.");
  });
  $("#naval-maneuvers").click(function () {
    alert("When steam-ships were the mainstream way of transpacific travel, Hawaiʻi was initially used as a leisure and resting point for many sailors. From this time, the idea of 'Hawaiian girls' servicing naval staff has been heavily marketed and culturally engrained. ");
  });
  $("#serve-ad").click(function () {
    alert("The depiction of the 'Hawaiian hula girl' serving mainland visitors in the poster is a prime example of how tourism was built out by and for white American consumerism. The image of service and Hawaiian being available for mainland leisure plays into many of the issues locals experience today such as entitled tourists being rude or demand 'better service' from local service staff.");
  });

  $("#welcome-sign").click(function () {
    alert("“To Hawaiians, daily life is neither soft nor kind. In fact, the political, economic and cultural reality for most Hawaiians is hard, ugly and cruel” (127). -Haunani-Kay Trask");
  });
  
  $("#pan-am-ad").click(function () {
    alert("Unlike the term, “Californians” or “Oregonians” the term “Hawaiians” is not the proper term to describe long-term Hawaiʻi residents as “Hawaiian” often refers to those of Native Hawaiian or Kānaka Maoli descent. ");
  });
  
});

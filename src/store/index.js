import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    morePersonInfoAArray: [
      {
      id: '0',
      name: 'Luke Skywalker',
      desc: 'Luke Skywalker is a fictional character and the main protagonist of the original film trilogy of the Star Wars franchise created by George Lucas. Portrayed by Mark Hamill, Luke first appeared in Star Wars (1977),[a] and he returned in The Empire Strikes Back (1980) and Return of the Jedi (1983). Three decades later, Hamill returned as Luke in the Star Wars sequel trilogy, appearing in all three films: The Force Awakens (2015), The Last Jedi (2017), and The Rise of Skywalker (2019). He reprised the role in The Mandalorian episode "Chapter 16: The Rescue" (2020), voicing the character that was portrayed by a body double with digital de-aging.' +
      'Originally a farmer on Tatooine living with his uncle and aunt, ' +
      'Luke becomes a pivotal figure in the Rebel Alliance s struggle against the Galactic Empire. The son of fallen Jedi Knight Anakin Skywalker (turned Sith Lord Darth Vader) and Padmé Amidala, Luke is the twin brother of Rebellion leader Princess Leia and eventual brother-in-law of the smuggler Han Solo. Luke trains to be a Jedi under Jedi Masters Obi-Wan Kenobi and Yoda, and rebuilds the Jedi Order. He later trains his nephew, Ben Solo, and mentors Rey. Though Luke dies at the end of The Last Jedi, he returns as a Force spirit in The Rise of Skywalker, encouraging Rey to face her grandfather, the resurrected Emperor Palpatine. At the end of the film, the spirits of Luke and Leia give Rey their blessing to adopt the Skywalker surname and continue their family' +
      's legacy.' +
      'The character also briefly appears in the prequel film Episode III– Revenge of the Sith as an infant.In the de - canonized Star Wars Expanded Universe(renamed Legends),' +
      'Luke is a main character in many stories set after Return of the Jedi, ' +
      'which depict him as a powerful Jedi Master, ' + 
      'the husband of Mara Jade,'+
      'father of Ben Skywalker and maternal uncle of Jaina,' +
      'Jacen and Anakin Solo.',
      photo:[
        {
          img: 'https://wallpapercave.com/wp/wp2223049.jpg'
        },
        {
          img: 'https://wallpapercave.com/wp/wp3984499.jpg'
        },
        {
          img: 'https://wallpapercave.com/wp/ISmNLc8.jpg'
        }
      ]
    },
    {
      id: '1',
      name: 'C-3PO',
      desc : 'C-3PO or See-Threepio is a fictional character in the Star Wars franchise who appears in the original trilogy, the prequel trilogy and the sequel trilogy. Built by Anakin Skywalker, C-3PO was designed as a protocol droid intended to assist in etiquette, customs, and translation, boasting that he is "fluent in over six million forms of communication". Along with his astromech droid counterpart and friend R2-D2, C-3PO provides comic relief within the narrative structure of the films, and serves as a foil. Anthony Daniels has portrayed the character in ten of eleven of the Star Wars films released to date, with the exception of Solo: A Star Wars Story, where the character does not appear. Anthony Daniels is also the only person to be involved in all 11 Star Wars films.' +
      'Despite his oblivious nature, C-3PO has played a pivotal role in the galaxy s history, appearing under the service of Shmi Skywalker, the Lars homestead, Padmé Amidala, Bail Organa, Raymus Antilles, Luke Skywalker, Jabba the Hutt, and Leia Organa. In the majority of depictions, C-3POs physical appearance is primarily a polished gold plating, although his appearance varies throughout the films; including the absence of metal coverings in The Phantom Menace, a dull copper plating in Attack of the Clones, and a red left arm in The Force Awakens. C-3PO also appears frequently in both canon and Star Wars Legends continuities of novels, comic books, and video games, and was a protagonist in the animated television series Droids.',
      photo:[
        {
          img: 'https://wallpapercave.com/wp/wp2369580.jpg'
        },
        {
          img: 'https://wallpapercave.com/wp/wp2369657.jpg'
        },
        {
          img: 'https://wallpapercave.com/wp/wp2369555.jpg'
        }
      ]
    
    },
    {
      id: '2',
      name : 'R2-D2',
      desc: 'R2-D2  or Artoo-Detoo is a fictional character in the Star Wars franchise created by George Lucas. He has appeared in ten of the eleven Star Wars films to date. At various points throughout the course of the films, R2, an astromech droid, is a friend to C-3PO, Padmé Amidala, Anakin Skywalker, Leia Organa, Luke Skywalker, Obi-Wan Kenobi, BB-8, Rey and D-O. R2-D2 and his companion C-3PO are the only characters to appear in every Star Wars film, with the exception of Solo: A Star Wars Story (2018). '+
      'English actor Kenny Baker played R2-D2 in all three original Star Wars films and received billing credit for the character in the prequel trilogy, where Bakers role was reduced as R2-D2 was portrayed mainly by radio controlled props and CGI models. In the sequel trilogy, Baker was credited as consultant for The Force Awakens; however, Jimmy Vee also co-performed the character in some scenes. Vee later took over the role beginning in The Last Jedi. In The Rise of Skywalker, puppeteers Hassan Taj and Lee Towersey perform the role of R2-D2, replacing Jimmy Vee, who had played the role in the previous two films. His sounds and vocal effects were created by sound designer Ben Burtt.' +
      'R2-D2 was designed in artwork by Ralph McQuarrie, co-developed by John Stears and built by Peteric Engineering. The revised Empire Strikes Back droids had fibreglass shells built by Tony Dyson and his White Horse Toy Company.',
      photo:[
        {
          img: 'https://wallpapercave.com/wp/wp1915673.jpg'
        },
        {
          img: 'https://wallpapercave.com/wp/wp1915679.jpg'
        },
        {
          img: 'https://wallpapercave.com/wp/wp1915684.jpg'
        }
      ]
    },
    {
      id: '3',
      name : 'Darth Vader',
      desc : 'Darth Vader is a fictional character in the Star Wars franchise. The character is the primary antagonist in the original trilogy and, as Anakin Skywalker, is a primary protagonist in the prequel trilogy. Star Wars creator George Lucas has collectively referred to the first six episodic films of the franchise as "the tragedy of Darth Vader". ' + 
      'Originally a slave on Tatooine, Anakin is a Jedi prophesied to bring balance to the Force. He is lured to the dark side of the Force by Palpatine and becomes a Sith lord, assuming the title Darth Vader. After a lightsaber battle with his former mentor Obi-Wan Kenobi, in which he is severely injured, Vader is transformed into a cyborg. He then serves the Galactic Empire as its chief enforcer. Despite this, he and his bloodlines remain destined to bring balance to the Force. Vader ultimately redeems himself by saving his son, Luke Skywalker, and killing Palpatine, sacrificing his own life in the process. He is also the secret husband of Padmé Amidala, biological father of Princess Leia, and maternal grandfather of Kylo Ren.' +
      'The character has been portrayed by numerous actors: David Prowse physically portrayed Vader while James Earl Jones voiced him in the original trilogy, and Sebastian Shaw portrayed the unmasked Anakin in Return of the Jedi, as well as the characters spirit in the original release of that film. Jake Lloyd and Hayden Christensen played the character in the prequel trilogy in the first and next two films, respectively, and the latter also replaced Shaw as Anakins spirit with the 2004 re-release of Return of the Jedi. His cinematic appearances span the first six Star Wars films, as well as Rogue One. He is referenced in both The Force Awakens and The Last Jedi, and makes vocal cameos as both Vader and Anakin in The Rise of Skywalker. He also appears in television series (most substantially The Clone Wars) and numerous iterations of the Star Wars Expanded Universe, including video games, novels, and comic books. ' +      
      'Darth Vader has become one of the most iconic villains in popular culture, and has been listed among the greatest villains and fictional characters ever.[5][6] The American Film Institute listed him as the third greatest movie villain in cinema history on 100 Years... 100 Heroes and Villains, behind Hannibal Lecter and Norman Bates. His role as a tragic hero in the saga was also met with positive reviews.',
      photo:[
        {
          img: 'https://wallpapercave.com/wp/wp2623552.jpg'
        },
        {
          img: 'https://wallpapercave.com/wp/wp3003859.jpg'
        },
        {
          img: 'https://wallpapercave.com/wp/wp8143578.jpg'
        }
      ]
    },
    {
      id: '4',
      name : 'Leia Organa',
      desc: 'Princess Leia Organa is a fictional character in the Star Wars franchise, portrayed in films by Carrie Fisher. Introduced in the original Star Wars film[c] in 1977, Leia is princess of the planet Alderaan, a member of the Imperial Senate and an agent of the Rebel Alliance. She thwarts the sinister Sith lord Darth Vader and helps bring about the destruction of the Empires cataclysmic superweapon, the Death Star. In The Empire Strikes Back (1980), Leia commands a Rebel base and evades Vader as she falls in love with the smuggler Han Solo. In Return of the Jedi (1983), Leia helps in the operation to rescue Han from the crime lord Jabba the Hutt and is revealed to be Vaders daughter and the twin sister of Luke Skywalker. ' +
      'The prequel film Revenge of the Sith (2005) establishes that the twins mother is Senator (and former queen) Padmé Amidala of Naboo, who dies after childbirth, while their father is none other than former Jedi Knight Anakin Skywalker, who would become Darth Vader. Leia is adopted by Senator Bail and Queen Breha Organa of Alderaan. In the sequel trilogy, Leia is the founder and General of the Resistance against the First Order. She and Han have a son named Ben Solo, who adopted the name Kylo Ren after turning to the dark side of the Force and became the lead enforcer for the First Order. In The Rise of Skywalker (2019), it is revealed that Leia was briefly trained as a Jedi by her brother sometime after Return of the Jedi. In the film, Leia is the mentor of Rey, the last remaining Jedi. Leia dies towards the end of the film but returns in the epilogue scene as a Force ghost alongside Luke. ' +
      'One of the more popular Star Wars characters, Leia has been called a 1980s icon, a feminist hero and model for other adventure heroines. She has appeared in many derivative works and merchandising, including the now-noncanonical Star Wars Expanded Universe, and has been referenced or parodied in several TV shows and films. Her cinnamon bun hairstyle from Star Wars (1977) and metal bikini from Return of the Jedi have become cultural icons. Fisher was nominated for the Saturn Award for Best Actress twice for A New Hope and Return of the Jedi. Fisher later received two Saturn Award nominations for Best Supporting Actress, the first for The Force Awakens and the second being a posthumous nomination for The Last Jedi.',
      photo:[
        {
          img: 'https://wallpapercave.com/wp/wp8048482.jpg'
        },
        {
          img: 'https://wallpapercave.com/wp/wp8048539.jpg'
        },
        {
          img: 'https://wallpapercave.com/wp/wp8048610.jpg'
        }
      ]
      
    },
    {
      id: '5',
      name: 'Owen Lars',
      desc : 'Owen Lars was a human male moisture farmer from the desert planet Tatooine. He was the son of Aika and Cliegg Lars, and he became the stepbrother of Jedi Knight Anakin Skywalker when Cliegg married Anakins mother, Shmi Skywalker. In 22 BBY, Shmi was killed by Tusken Raiders, and Cliegg passed away soon after. Lars married his girlfriend, Beru Whitesun, and they toiled to maintain the homestead. ' +
      'In 19 BBY, Lars and his wife were contacted by Skywalkers Jedi Master, Obi-Wan Kenobi, and they were tasked with caring for Skywalkers infant son, Luke. Lars believed that Skywalker had died due to his role as a Jedi, so to protect Luke, the farmer forbade Kenobi from visiting or training the boy. In the following years, Lars prevented Luke from knowing the truth about his father, and he kept the boy busy with farm work.' + 
      'In 0 BBY, Lars and Luke Skywalker purchased the droid R2-D2, who, unbeknownst to them, possessed stolen plans for the Death Star, an Imperial superweapon. Imperial stormtroopers tracked the droid to Lars homestead, where they interrogated and murdered both him and his wife. When Skywalker discovered that his family had been killed, he left Tatooine with Kenobi to train as a Jedi, joining the Rebel Alliance and destroying the Death Star in the Battle of Yavin.',
      photo:[
        {
          img: 'https://lumiere-a.akamaihd.net/v1/images/owen-lars-bio-1_9b5ac94f.jpeg'
        },
        {
          img: 'https://lumiere-a.akamaihd.net/v1/images/owen-lars-bio-7_7bf03339.jpeg'
        },
        {
          img: 'https://lumiere-a.akamaihd.net/v1/images/owen-lars-bio-5_dd84f781.jpeg'
        }
      ]
      
    },
    {
      id: '6',
      name : 'Beru Whitesun lars',
      desc: 'Beru Whitesun Lars was a Tatooinian woman who raised Luke Skywalker after the fall of the Galactic Republic and was the wife of Owen Lars. Coming from a long line of moisture farmers, Beru grew up near Mos Eisley on Tatooine. On a trip to Anchorhead, she met Owen Lars, the son of another moisture farmer, Cliegg Lars. Beru and Owen fell in love, and Beru later became part of the Lars family.'+
      'Shortly before the outbreak of the Clone Wars, Owens step-mother, Shmi Skywalker Lars, was kidnapped by Tusken Raiders, an event that brought Shmis son, Anakin Skywalker, and his soon-to-be-wife, Padmé Amidala, to the Lars homestead.' + 
      'Three years later, when the galactic conflict came to a close, Beru and Owen became the guardians of their new baby nephew, Luke Skywalker, after his father turned to the dark side of the Force and became Darth Vader. Nineteen years later, Beru and Owen would be discovered by Stormtroopers who subsequently killed them, but Luke was out of harms way to receive their demise.',
      photo:[
        {
          img: 'https://lumiere-a.akamaihd.net/v1/images/databank_berulars_01_169_68101518.jpeg?region=0%2C49%2C1560%2C780'
        },
        {
          img: 'https://i.pinimg.com/originals/fc/a2/a3/fca2a398d456568029f42be2b7909d7e.jpg'
        },
        {
          img: 'https://i.pinimg.com/originals/e6/00/bb/e600bb5598d0987680a6c8c40300136f.jpg'
        }
      ]
      
    },
    {
      id : '7',
      name: 'R5-D4',
      desc : 'R5-D4, also called "Red" by Luke Skywalker, was a red and white-striped R5 astromech droid owned by a group of Jawas on Tatooine in the early days of the Galactic Civil War. Shortly before the Battle of Yavin, the Jawas attempted to sell him to Owen Lars, but the droid purposely malfunctioned his motivator at the advice of R2-D2, so that Lars could purchase R2-D2 in R5-D4s place. The droid survived an Imperial attack on the sandcrawler soon after, and went out to find the Rebellion. R5 was still active by the time of the New Republic Era, and eventually came into the service of Mos Eisley hangar manager Peli Motto. He projected a map of Tatooine in order to assist the Mandalorian Din Djarin.',
      photo:[
        {
          img: 'https://lumiere-a.akamaihd.net/v1/images/r5-d4_main_image_7d5f078e.jpeg?region=114%2C0%2C1332%2C666'
        },
        {
          img: 'https://static.onecms.io/wp-content/uploads/sites/6/2019/01/the-mandalorian-2000.jpg'
        },
        {
          img: 'https://jedibusiness.com/images/actionFigures/The-Saga-Collection/The-Saga-Collection-R5-D4_Big_2.jpg'
        }
      ]
      
    },
    {
      id: '8',
      name: 'Biggs Darklighter',
      desc: 'Biggs Darklighter was a human male ace pilot who fought for the Alliance to Restore the Republic during the early days of the Galactic Civil War. He grew up on the desert world of Tatooine, where he became a close boyhood friend of Luke Skywalker. The two became pilots and dreamed of leaving Tatooine. Darklighter left his homeworld for the Imperial Academy, but defected from the Galactic Empire after graduation in order to join the Rebel Alliance. He returned to Tatooine one final time to tell Skywalker of his plans.'+
      'With his home planet behind him, Darklighter relocated to the Rebel base on Yavin 4. He reunited with Skywalker, who had helped rescue Princess Leia Organa, a leader in the Alliance, from the Death Star with stolen plans for the planet-destroying space station. The Rebellion analyzed the plans and organized the Battle of Yavin, where Darklighter and Skywalker flew as members of Red Squadron in the assault on the station. Skywalker successfully destroyed the Death Star, but not before Darklighter was killed in combat by Darth Vader.',
      photo:[
        {
          img: 'https://lumiere-a.akamaihd.net/v1/images/image_606ff7f7.jpeg?region=0%2C0%2C1560%2C780'
        },
        {
          img: 'https://i.pinimg.com/originals/7c/03/f3/7c03f3ae29e87a9e42096c48976d2e75.jpg'
        },
        {
          img: 'https://i.pinimg.com/originals/e0/40/38/e040388c003dd76c34df20c65b7ced4f.jpg'
        }
      ]

      
    
    },
    {
      id: '9',
      name: 'Obi-Wan Kenobi',
      desc: 'Obi-Wan Kenobi was a Force-sensitive legendary human male Jedi Master who served on the Jedi High Council during the last years of the Republic Era. During the Imperial Era, he adopted the alias Ben Kenobi in order to hide from the regime that drove the Jedi to near extinction. A noble man known for his skills with the Force, Kenobi trained Anakin Skywalker, served as a Jedi General in the Grand Army of the Republic, and became a mentor to Luke Skywalker prior to his death in 0 BBY.'+
      'Born on the planet Stewjon in 57 BBY, Kenobi joined the Jedi Order—an order of Force-sensitive peacekeepers—at a young age. Following his initial lessons under Grand Master Yoda, he became the Padawan of Jedi Master Qui-Gon Jinn. During the Invasion of Naboo in 32 BBY, Kenobi defeated the Sith Lord Darth Maul and was awarded the status of Jedi Knight. As a result of Jinns death, Kenobi took on the task of training Anakin Skywalker, but often had to rein in his adventure-seeking apprentice. Although he deemed Skywalker arrogant and overconfident in his Force powers, Kenobi also regarded him as a brother and good friend. Moreover, he was convinced that Skywalker was the Chosen One destined to bring the Force into balance by destroying the Sith.' +      
      'In the aftermath of the First Battle of Geonosis in 22 BBY, Kenobi and his fellow Jedi defended the Galactic Republic from the Confederacy of Independent Systems, becoming generals in the Republic Military. As the commanding officer of the 7th Sky Corps, Kenobis second-in-command was Clone Marshal Commander CC-2224 although he also often served with Skywalker who commanded the elite 501st Legion. In 19 BBY, Kenobi destroyed General Grievous, effectively ending the Clone Wars. By then, however, Order 66 was activated by the Sith Lord Darth Sidious, which resulted in the clone troopers turning against their Jedi officers. Kenobi survived Codys betrayal, only to discover that Skywalker turned to the dark side of the Force as Darth Vader. A fateful battle ensued between the former friends, and ended with Kenobi leaving Vader to die on Mustafar. With the Jedi all but extinct, Kenobi exiled himself to Tatooine where he lived as a hermit for two decades.'+
      'During the Galactic Civil War, Princess Leia Organa of Alderaan was captured by the Galactic Empire while attempting to recruit Kenobi for the Alliance to Restore the Republic. Kenobi chose to answer the Alliances plea for help, and also began training Vaders son, Luke Skywalker, who sought to become a Jedi like his father before him. Their time together was cut short, however, as Kenobi sacrificed himself to protect Skywalker. Vader struck down his former master, but ultimately death was not the end for Kenobi, having preserved his consciousness as a Force spirit. He would continue to watch over Skywalker, guiding him on his path to knighthood and beyond.',
      photo:[
        {
          img: 'https://wallpapercave.com/wp/wp4581080.jpg'
        },
        {
          img: 'https://wallpapercave.com/wp/wp4581096.jpg'
        },
        {
          img: 'https://wallpapercave.com/wp/wp4581100.jpg'
        }
      ]
      
    }
    

  
  
  
  
  
  
  
  
  
  ],
    humasArray: [],
    resultArray: [],
    colorFilterArray: [],
    ageFilterArray: [],
    heightFilterArray: [],
    photoArray: [{
        name: "BeruWhitesunlars",
        photo: "Beru Whitesun lars.jpg"
      },
      {
        name: "BiggsDarklighter",
        photo: "Biggs Darklighter.jpg"
      },
      {
        name: "C3PO",
        photo: "C-3PO.png"
      },
      {
        name: "DarthVader",
        photo: "Darth Vader.jpg"
      },
      {
        name: "LeiaOrgana",
        photo: "Leia Organa.jpg"
      },
      {
        name: "LukeSkywalker",
        photo: "Luke Skywalker.jpg"
      },
      {
        name: "ObiWanKenobi",
        photo: "Obi-Wan Kenobi.jpg"
      },
      {
        name: 'OwenLars',
        photo: "Owen Lars.jpg"
      },
      {
        name: 'R2D2',
        photo: "R2-D2.jpg"
      },
      {
        name: "R5D4",
        photo: "R5-D4.jpeg"
      },
    ]

  },
  mutations: {
    SET_HUMANS_TO_STATE: (state, response) => {

      if (state.resultArray == 0) {
        state.isLoading = true
      }
      state.humasArray = response;

      for (var i = 0; i < state.humasArray.length; i++) {
        for (var b = 0; b < state.humasArray.length; b++) {
          if (state.humasArray[i].name.replace(/-|\s/g, "") == state.photoArray[b].name) {

            state.humasArray[i].human_photo = state.photoArray[b].photo

          }
        }
      }

      state.resultArray = response;
      state.colorFilterArray = response;
      state.ageFilterArray = response;
      state.heightFilterArray = response;

      if (state.resultArray != 0) {
        state.isLoading = false
      }

    },
    SET_COLOR_FILTER: (state, name) => {

      if (name == "all") {
        state.colorFilterArray = state.humasArray
      } else {
        state.colorFilterArray = state.humasArray.filter(color => color.eye_color == name)
      }







    },
    SET_AGE_FILTER: (state, obj) => {

      state.ageFilterArray = state.humasArray.filter(human => human.birth_year === 'unknown' || human.birth_year.replace(/[^\d.-]/g, '') >= obj.minAgeValue && human.birth_year.replace(/[^\d.-]/g, '') <= obj.maxAgeValue)

    },
    SET_HEIGHT_FILTER: (state, obj) => {
      state.heightFilterArray = state.humasArray.filter(human => human.height >= obj.minHeightvalue && human.height <= obj.maxHeightvalue)

    },
    SET_FILTERS: (state) => {

      document.body.style.overflow = "hidden"
      state.isLoading = true
      state.resultArray = []
      for (var colorItem = 0; colorItem < state.colorFilterArray.length; colorItem++) {
        for (var heightItem = 0; heightItem < state.heightFilterArray.length; heightItem++) {
          for (var ageItem = 0; ageItem < state.ageFilterArray.length; ageItem++) {
            if (
              state.colorFilterArray[colorItem] === state.heightFilterArray[heightItem] &&
              state.colorFilterArray[colorItem] === state.ageFilterArray[ageItem] &&
              state.heightFilterArray[heightItem] === state.ageFilterArray[ageItem]
            ) {

              state.resultArray.push(state.ageFilterArray[ageItem])

            }
          }
        }
      }

      function loadingFalse() {
        state.isLoading = false
        document.body.style.overflow = "auto"
      }

      setTimeout(loadingFalse, 500);

    },
    SET_SORT_BY: (state, name) => {

      document.body.style.overflow = "hidden"
      state.isLoading = true

      if (name == "age") {
        state.resultArray.sort((a, b) => b.birth_year.replace(/[^\d.-]/g, '') - a.birth_year.replace(/[^\d.-]/g, ''));
      } else if (name == "mass") {
        state.resultArray.sort((a, b) => b.mass - a.mass);
      } else if (name == "height") {
        state.resultArray.sort((a, b) => b.height - a.height);
      }

      function loadingFalse() {
        state.isLoading = false
        document.body.style.overflow = "auto"
      }

      setTimeout(loadingFalse, 500);


    }
  },
  actions: {
    GET_HUMANS_LIST({
      commit
    }) {
      return axios
        .get("https://swapi.dev/api/people")

        .then(function (response) {
          //console.log('httpsREQ')
          commit("SET_HUMANS_TO_STATE", response.data.results)
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    COLOR_FILTER({
      commit
    }, name) {
      commit('SET_COLOR_FILTER', name)
      commit('SET_FILTERS')


    },
    AGE_FILTER({
      commit
    }, obj) {
      commit('SET_AGE_FILTER', obj)
      commit('SET_FILTERS')
    },
    HEIGHT_FILTER({
      commit
    }, obj) {
      commit('SET_HEIGHT_FILTER', obj)
      commit('SET_FILTERS')
    },
    SORT_BY({
      commit
    }, name) {



      commit("SET_SORT_BY", name)
    }
  },
  getters: {
    HUMANS_ARRAY(state) {
      return state.humasArray
    },
    REZULT_ARRAY(state) {
      return state.resultArray
    },
    LOADING(state) {
      return state.isLoading
    },
    PERSON_ONE_ARRAY(state){
      return state.morePersonInfoAArray
    }
  },
})
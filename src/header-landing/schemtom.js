import React, { Component, Fragment } from 'react';
import './style.css';
import ReactJsonSchema from '../components/sc';
import divComponent from '../components/divComponent';
import imageComponent from '../components/imageComponent';

import inputComponent from '../components/inputComponent';
import selecComponent from '../components/selectComponent';
import divWithScript from '../components/scriptComponent';
import spanComponent from '../components/spanComponent';
import fragmentComponent from '../components/fragmentComponent';
import conditionalComponent from '../components/conditionalComponent';

class LandingPageHeaderSchema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      storeExist: true,
      errors: null,
    };
  }

  handleScriptLoad = () => {
    // Initialize Google Autocomplete
    /*global google*/
    this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), {
      types: ['geocode'],
      componentRestrictions: { country: 'si' },
    });
    this.autocomplete.setFields(['address_component']);
    // Fire Event when a suggested name is selected
    this.autocomplete.addListener('place_changed', this.fillInAddress);
  };

  fillInAddress = () => {
    const componentForm = {
      postal_code: 'short_name',
      locality: 'short_name',
    };
    const place = this.autocomplete.getPlace();
    if (place.address_components) {
      for (var i = 0; i < place.address_components.length; i++) {
        const addressType = place.address_components[i].types[0];
        if (componentForm[addressType]) {
          const val = place.address_components[i][componentForm[addressType]];
          this.setState({ query: val });
        }
      }
    }
  };

  handleLogin = event => {
    let reqUrl = localStorage.getItem('reqUrl');
    if (!reqUrl) {
      reqUrl = process.env.REACT_APP_HOME_URL;
    }
    window.location.href = 'https://racun.tus.si/authorize/?client_id=' + process.env.REACT_APP_CLIENT_PUBLIC_KEY + '&response_type=code&redirect=' + reqUrl;
  };

  handleAppSwitch = event => {
  };

  checkStoreExist = event => {
    if (this.state.query === '') {
      this.setState({
        errors: {
          msg: "err",
        },
      });
    } else {
      this.setState({ errors: null });
      //const store = this.props.stores.find(store => store.zip.includes(parseInt(this.state.query)) || store.city === this.state.query);
      if (true) {
        this.navigateToRegistration();
      } else {
        this.setState({ storeExist: false });
      }
    }
  };

  navigateToRegistration = () => {
    let reqUrl = localStorage.getItem('reqUrl');
    window.location.href = 'https://racun.tus.si/register/?client_id=' + process.env.REACT_APP_CLIENT_PUBLIC_KEY + '&response_type=code&redirect=' + reqUrl;
  };

  render() {
    const schema1 = {
        "component": "divComponent",
        "className": "header-container",
        "children":[{
            "component":"divWithScript",
            "onLoad":"handleScriptLoad",
            "className":"header-container-green",
            "children":[
              {
                "component":"div",
                "className":"header-nav",
                "children":[{
                    "component":"div",
                    "className":"header-logo",
                    "children":[{
                        "component":"imageComponent",
                        "src":"/images/hitri_nakup_logo_white.png",
                    }],
                },
                   {"component":"divComponent",
                   "className":"login-btn",
                   "children":[{
                       "component":"spanComponent",
                       "className":"login-btn-title",
                       "title":"Login button",
                   }]
                }]
            }]
        }]
      }
      const schema2 = {
          "component":"divComponent",
          "className":"header-img-background",
          "children":[{
              "component":"imageComponent",
              "src":"/images/trgovine-background.png",
              "style":{
                "width": "1200px",
                "display": "block",
                "margin": "0 auto",
              }
          }]
      }
      const schema3 = {
        "component":"divComponent",
        "className":"header-address-container-green",
        "children":[
            {
            "component":"divComponent",
            "className":"address-logo",
            "style":{"marginTop": "20px","marginBottom": "30px"},
            "children":[{
                "component":"imageComponent",
                "src":"/images/hn-logo_color.svg",
                "style":{"width": "280px"},
            }]
            },
            {
            "component":"conditionalComponent",
            "dynamicVar1":"storeExist",
            "children":[
            { 
              "component":"fragmentComponent",
              "children":[{
                "component":"p",
                "className":"header_no_stores_title",
                "text":"Žal Hitri Nakup v vašem kraju še ni na voljo."
            },{
                "component":"p",
                "className":"header_no_stores_txt_smaller",
                "text":"Če želite pa lahko že sedaj vaš nakup prevzamete v eni izmed poslovalnic, ki trenutno omogočajo hiter nakup."
            },
            {
              "component":"selecComponent",
              "options":[{"value":"Planet Tuš Celje", "label":"Planet Tuš Celje"}],
              "placeholder":"Izaberite poslovnico",
              "className":"choose_location_select",
              "primaryColor25":"#F8F8F8",
              "primaryColor":"#03A84E"
            },
            {
              "component":"divComponent",
              "className":"address-submit-container",
              "onClick":"navigateToRegistration",
              "children":[{
                "component":"span",
                "className":"address-submit",
                "text":"USTVARI RAČUN"
              }]
            },
            {
              "component":"p",
              "text":"Ustvarite si račun in bodite prvi obveščeni ko bo storitev na voljo pri vas.",
              "className":"create-account-text"
            },]  
          },
              {
                "component":"fragmentComponent",
                "children":[   {
                  "component":"p",
                  "className":"address-title",
                  "text":"Hitreje do vašega nakupa"
                  },
                  {
                      "component":"p",
                      "className":"address-explain",
                      "text":"Preverite možnost dostave ali prevzema na vaši lokaciji."
                  },
                  {
                      "component":"inputComponent",
                      "className":"input-autocomplete",
                      "id":"autocomplete",
                   
                      "placeholder":"Vpišite Vaš naslov"
                  },
                  {
                      "component":"divComponent",
                      "className":"address-submit-container",
                      "onClick": "checkStoreExist",
                      "children":[{
                          "component":"span",
                          "className":"address-submit",
                          "text":"Preverite",
                      }]
                  },]
              },
          
         
        ],
            },
            {
              "component":"p",
              "className":"adress-login",
              "text":"Ste že član Hitrega Nakupa?",
              "children":[{
                "component":"span",
                "className":"address-login-link-green",
                "text":"Prijavite se"
              }]
            }
        ]
    }
      
      const view = new ReactJsonSchema();
      const view2 = new ReactJsonSchema();
      const view3 = new ReactJsonSchema();

      view.setComponentMap({ divComponent, imageComponent,divWithScript, spanComponent });
      view.setHandlerMap({
        handleScriptLoad:() => this.handleScriptLoad(),
      })
      view.setVariablesMap({
        dynamicVar:[{name:this.state.storeExist}],
      })
      view2.setComponentMap({divComponent, imageComponent});
      view3.setComponentMap({divComponent, imageComponent, inputComponent, selecComponent,conditionalComponent,fragmentComponent});
      view3.setVariablesMap({
        storeExist:this.state.storeExist,
      })
      view3.setHandlerMap({
        checkStoreExist: ()=>this.checkStoreExist(),
        navigateToRegistration: ()=> this.navigateToRegistration()
      })
      const funcs1 = view.parseSchema(schema1);
      const funcs2 = view2.parseSchema(schema2);
      const funcs3 = view3.parseSchema(schema3);

    return (
      <Fragment>

          {funcs1}
          {funcs2}
          {funcs3}
          
      </Fragment>
    );
  }
}

export default LandingPageHeaderSchema;

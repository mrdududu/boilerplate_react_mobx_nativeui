import {observable, action, autorun, toJS, extendObservable} from 'mobx';


class Store {
  // @observable facebookAuthData = null;
  // @observable photos = [];

  constructor() {
    autorun(
      () => {
        // console.log("autorun facebookAuthData", toJS(this.facebookAuthData));
      }
    );
  }

  // @action
  // login = () => {
  //   return new Promise(
  //     (resolve, reject) => {
  //       try {
  //         window.FB.login(
  //           resp => {
  //             this.facebookAuthData = resp;
  //             resolve(resp);
  //           }
  //           ,
  //           {scope: 'public_profile,email,user_photos,publish_actions'}
  //         );
  //       }
  //       catch(err){
  //         console.log("store login() err", err);
  //       }
  //     }
  //   );
  // };

  // @action
  // getPhotos = async () => {
  //   let res = await this.fbApi('/me/photos?fields=picture&type=uploaded&limit=100');
  //   this.photos.push(...res.data);
  // }
}

const singleton = new Store();
export default singleton;
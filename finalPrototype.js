import { LitElement, html } from '@polymer/lit-element';
import { FinalPrototypeStyle } from './finalPrototype.style';

export class FinalPrototype extends LitElement
{
    static get properties()
    {
        return
    {
    };
  }
    attributeChangedCallback(username, oldval, newval)
    {
    super.attributeChangedCallback(username, oldval, newval);
    }
    constructor()
    {
    super();    
    }

  handleKeyPress(e) {
      if (e.key === 'Enter') {
        let username;
        let id;
        let index = -1;
        const value = e.target.value;
          if (e.target.username.search("::") > -1)
          {
            const varCount = e.target.username.split("::").length;
            if (varCount === 2) {
                username = e.target.username.split("::")[0];
                id = e.target.username.split("::")[1];
            } else if (varCount === 3) {
                username = e.target.username.split("::")[0];
                index = e.target.username.split("::")[1];
                id = e.target.username.split("::")[2];
            }
        } else {
            name = e.target.username;
        }
        this.dispatchEvent(new CustomEvent(`${username}:enter`, {
            bubbles: true,
            detail: {
                type: "textinput",
                username: username,
                value: value,
                index: index,
                id: id
          }
        }));
      }
      let username;
      let id;
      let index = -1;
      const value = e.key;
      if (e.target.username.search("::") > -1)
      {
          const varCount = e.target.username.split("::").length;
          if (varCount === 2) {
              name = e.target.username.split("::")[0];
              id = e.target.username.split("::")[1];
          } else if (varCount === 3) {
              username = e.target.username.split("::")[0];
              index = e.target.username.split("::")[1];
              id = e.target.username.split("::")[2];
          }
      } else {
          username = e.target.username;
      }
      this.dispatchEvent(new CustomEvent(`${username}:keypress`, {
          bubbles: true,
          detail: {
              type: "textinput",
              username: username,
              value: value,
              index: index,
              id: id
          }
      }));
  }

  handleChange(e) {
    let username;
    let id;
    let index = -1;
    const value = e.target.value;
    if (e.target.username.search("::") > -1) {
        const varCount = e.target.username.split("::").length;
        if (varCount === 2) {
            username = e.target.username.split("::")[0];
            id = e.target.username.split("::")[1];
        } else if (varCount === 3) {
            username = e.target.username.split("::")[0];
            index = e.target.username.split("::")[1];
            id = e.target.username.split("::")[2];
        }
    } else {
        username = e.target.username;
    }
    this.dispatchEvent(new CustomEvent(`${username}:change`, {
        bubbles: true,
        detail: {
            type: "textinput",
            username: username,
            value: value,
            index: index,
            id: id
        }
    }));
  }

  handleClick(target, owner, e) {
    let username;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            username = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            username = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
            this[`${owner}SelectedIndex`] = index;
            this.requestUpdate();
        }
    } else {
        username = target;
    }
    this.dispatchEvent(new CustomEvent(`${username}:click`, {
        bubbles: true,
        detail: {
            type: "button",
            username: username,
            index: index,
            id: id
        }
    }));
  }

  handleMouseOver(target, owner, e) {
    let username;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            username = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            username = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
        }
    } else {
        username = target;
    }
    this.dispatchEvent(new CustomEvent(`${username}:mouseover`, {
        bubbles: true,
        detail: {
            type: "button",
            username: username,
            index: index,
            id: id
        }
    }));
  }

    handleMouseOut(target, owner, e)
    {
    let username;
    let id;
    let index = -1;
    if (target.search("::") > -1) {
        const varCount = target.split("::").length;
        if (varCount === 2) {
            username = target.split("::")[0];
            id = target.split("::")[1];
        } else if (varCount === 3) {
            username = target.split("::")[0];
            index = parseInt(target.split("::")[1]);
            id = target.split("::")[2];
        }
    } else {
        username = target;
    }
    this.dispatchEvent(new CustomEvent(`${username}:mouseout`, {
        bubbles: true,
        detail: {
            type: "button",
            username: username,
            index: index,
            id: id
        }
    }));
  }

  handleChangeCheckbox(e) {
      let username;
      let id;
      let index = -1;
      const value = e.target.checked;
      if (e.target.username.search("::") > -1) {
          const varCount = e.target.username.split("::").length;
          if (varCount === 2) {
              username = e.target.username.split("::")[0];
              id = e.target.username.split("::")[1];
          } else if (varCount === 3) {
              username = e.target.username.split("::")[0];
              index = e.target.username.split("::")[1];
              id = e.target.username.split("::")[2];
          }
      } else {
          username = e.target.username;
      }
      this.dispatchEvent(new CustomEvent(`${username}:change`, {
          bubbles: true,
          detail: {
              type: "checkbox",
              username: username,
              value: value,
              index: index,
              id: id
          }
      }));
  }

    handleChangeRadio(e)
    {
      let username;
      let id;
      let index = -1;
      const value = e.target.checked;
        if (e.target.username.search("::") > -1) {
          const varCount = e.target.username.split("::").length;
          if (varCount === 2) {
              username = e.target.username.split("::")[0];
              id = e.target.username.split("::")[1];
          } else if (varCount === 3) {
              username = e.target.username.split("::")[0];
              index = e.target.username.split("::")[1];
              id = e.target.username.split("::")[2];
          }
      } else {
            username = e.target.username;
      }
      this.dispatchEvent(new CustomEvent(`${username}:change`, {
          bubbles: true,
          detail: {
              type: "radio",
              username: username,
              value: value,
              index: index,
              id: id
          }
      }));
  }

    handleChangeRadioGroup(e)
    {
        let username;
      let id;
      let index = -1;
      const value = e.target.value;
        if (e.target.username.search("::") > -1) {
            const varCount = e.target.username.split("::").length;
          if (varCount === 2) {
              username = e.target.username.split("::")[0];
              id = e.target.username.split("::")[1];
          } else if (varCount === 3) {
              username = e.target.username.split("::")[0];
              index = e.target.username.split("::")[1];
              id = e.target.username.split("::")[2];
          }
      } else {
            username = e.target.username;
      }
      // this.state[groupName] = value;
        this.dispatchEvent(new CustomEvent(`${username}:change`, {
          bubbles: true,
          detail: {
              type: "radiogroup",
              username: username,
              value: value,
              index: index,
              id: id
          }
      }));
  }

    handleChangeSelect(e)
    {
        let username;
      let id;
      const value = e.target.value;
      if (value !== "selectdefault") {
          if (e.target.id.search("::") > -1) {
              id = e.target.id.split("::")[1];
          }
          username = e.target.username;
          // this.state[groupName] = value;
          this.dispatchEvent(new CustomEvent(`${username}:change`, {
              bubbles: true,
              detail: {
                  type: "select",
                  username: username,
                  value: value,
                  id: id
              }
          }));
      }
  }

  render(){
    
    return html`
    <style>
      ${FinalPrototypeStyle}
    </style>
    <div data-layer="5e73b992-56de-48d4-a4e2-a81f3bdaabbe" class="finalPrototype">        <div data-layer="ffab9788-c108-47ab-9cd9-1ec153c95437" class="group337c7304f">            <div data-layer="ee2e1e23-0199-4dbf-b97a-76454db6f998" class="rectangle27bf6ca166"></div>
            <div data-layer="336b4168-3bfb-45d4-a6b5-58797a06cce6" class="rectangle14f5d89132"></div>
            <svg data-layer="1ca1f05c-b070-41a2-8776-79327933126b" preserveAspectRatio="none" viewBox="-0.7498154640197754 -0.7499827521824045 421.4993896484375 935.5003662109375" class="subtraction1028fc8d0"><defs><pattern id="img-subtraction1028fc8d0" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><image xlink:href="assets/subtraction1028fc8d0.png" x="0" y="0" width="420.00px" height="934.00px" /></pattern></defs><path d="M 380.9997253417969 934.0003662109375 L 38.99971389770508 934.0003662109375 C 33.73477172851562 934.0003662109375 28.62736129760742 932.9690551757812 23.81936073303223 930.9354248046875 C 19.17524337768555 928.9710693359375 15.00442028045654 926.1590576171875 11.42289066314697 922.5773315429688 C 7.84100866317749 918.9954223632812 5.029008388519287 914.8245849609375 3.06489086151123 910.1804809570312 C 1.031243920326233 905.3724975585938 6.744743586750701e-05 900.2649536132812 0.0001850944972829893 894.9996337890625 L 0.0001850944972829893 39.00060653686523 C 6.744743586750701e-05 33.73530960083008 1.031243920326233 28.62778282165527 3.06489086151123 23.81978225708008 C 5.029008388519287 19.1756649017334 7.84100866317749 15.00484085083008 11.42289066314697 11.42295837402344 C 15.00442028045654 7.841193675994873 19.17524337768555 5.029193878173828 23.81936073303223 3.064840793609619 C 28.62724304199219 1.031193733215332 33.73465728759766 0.000134894871735014 38.99971389770508 0.000134894871735014 L 92.96006774902344 0.000134894871735014 L 92.96006774902344 4.031075954437256 C 92.96018218994141 16.71366500854492 103.2775955200195 27.03166389465332 115.9595947265625 27.03166389465332 L 304.0398254394531 27.03166389465332 C 316.7218322753906 27.03166389465332 327.0394897460938 16.71366500854492 327.0394897460938 4.031075954437256 L 327.0394897460938 1.724781759548932e-05 L 380.9997253417969 0.000134894871735014 C 386.2647705078125 0.000134894871735014 391.3721923828125 1.031193733215332 396.1800537109375 3.064840793609619 C 400.8241882324219 5.029193878173828 404.9949951171875 7.841193675994873 408.57666015625 11.42295837402344 C 412.1582946777344 15.00460529327393 414.9703063964844 19.17554664611816 416.9346618652344 23.81978225708008 C 418.9682922363281 28.62789916992188 419.9996032714844 33.73554611206055 419.9996032714844 39.00060653686523 L 419.9996032714844 894.9996337890625 C 419.9996032714844 900.2647094726562 418.9682922363281 905.3723754882812 416.9346618652344 910.1804809570312 C 414.9703063964844 914.82470703125 412.1582946777344 918.9956665039062 408.57666015625 922.5773315429688 C 404.9949951171875 926.1590576171875 400.8241882324219 928.9710693359375 396.1800537109375 930.9354248046875 C 391.372314453125 932.9689331054688 386.264892578125 934.0001220703125 380.9997253417969 934.000244140625 L 380.9997253417969 934.0003662109375 Z" fill="url(#img-subtraction1028fc8d0)" /></svg>
</div>
        <div data-layer="d7428ffa-da56-4292-8018-644c4c42919e" class="group3aa5d17c9">            <div data-layer="c4843efb-db64-4995-a782-a18b0702b1f1" class="rectangle27581ee94a"></div>
            <div data-layer="db63650b-bace-4f38-8eb2-0b32eceaa294" class="rectangle14a1885870"></div>
            <svg data-layer="f1e0c70e-fc81-4da5-ace1-49e58ba381db" preserveAspectRatio="none" viewBox="-0.7498154640197754 -0.7499827521824045 421.4994201660156 935.5003662109375" class="subtraction162fbd1d7"><defs><pattern id="img-subtraction162fbd1d7" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><image xlink:href="assets/subtraction162fbd1d7.png" x="0" y="0" width="420.00px" height="934.00px" /></pattern></defs><path d="M 380.9997253417969 934.0003662109375 L 38.99971389770508 934.0003662109375 C 33.73477172851562 934.0003662109375 28.62736129760742 932.9690551757812 23.81936073303223 930.9354248046875 C 19.17524337768555 928.9710693359375 15.00442028045654 926.1590576171875 11.42289066314697 922.5773315429688 C 7.84100866317749 918.9954223632812 5.029008388519287 914.8245849609375 3.06489086151123 910.1804809570312 C 1.031243920326233 905.3724975585938 6.744743586750701e-05 900.2649536132812 0.0001850944972829893 894.9996337890625 L 0.0001850944972829893 39.00060653686523 C 6.744743586750701e-05 33.73530960083008 1.031243920326233 28.62778282165527 3.06489086151123 23.81978225708008 C 5.029008388519287 19.1756649017334 7.84100866317749 15.00484085083008 11.42289066314697 11.42295837402344 C 15.00442028045654 7.841193675994873 19.17524337768555 5.029193878173828 23.81936073303223 3.064840793609619 C 28.62724304199219 1.031193733215332 33.73465728759766 0.000134894871735014 38.99971389770508 0.000134894871735014 L 92.96006774902344 0.000134894871735014 L 92.96006774902344 4.031075954437256 C 92.96018218994141 16.71366500854492 103.2775955200195 27.03166389465332 115.9595947265625 27.03166389465332 L 304.0398254394531 27.03166389465332 C 316.7218322753906 27.03166389465332 327.0394897460938 16.71366500854492 327.0394897460938 4.031075954437256 L 327.0394897460938 1.724781759548932e-05 L 380.9997253417969 0.000134894871735014 C 386.2647705078125 0.000134894871735014 391.3721923828125 1.031193733215332 396.1800537109375 3.064840793609619 C 400.8241882324219 5.029193878173828 404.9949951171875 7.841193675994873 408.57666015625 11.42295837402344 C 412.1582946777344 15.00460529327393 414.9703063964844 19.17554664611816 416.9346618652344 23.81978225708008 C 418.9682922363281 28.62789916992188 419.9996032714844 33.73554611206055 419.9996032714844 39.00060653686523 L 419.9996032714844 894.9996337890625 C 419.9996032714844 900.2647094726562 418.9682922363281 905.3723754882812 416.9346618652344 910.1804809570312 C 414.9703063964844 914.82470703125 412.1582946777344 918.9956665039062 408.57666015625 922.5773315429688 C 404.9949951171875 926.1590576171875 400.8241882324219 928.9710693359375 396.1800537109375 930.9354248046875 C 391.372314453125 932.9689331054688 386.264892578125 934.0001220703125 380.9997253417969 934.000244140625 L 380.9997253417969 934.0003662109375 Z" fill="url(#img-subtraction162fbd1d7)" /></svg>
</div>
        <div data-layer="c29f247f-1f1d-4c8b-bad7-ca21e8beaffd" class="group3">            <div data-layer="9711b5d2-614d-42a5-9c0b-cec95a4685d6" class="rectangle27"></div>
            <div data-layer="cd4755c5-0957-4c3f-bc4f-6965a5e0702c" class="rectangle14"></div>
            <svg data-layer="f99d75ca-e5d2-4f81-a430-62f0aaa5be00" preserveAspectRatio="none" viewBox="-0.7498154640197754 -0.7499827521824045 421.4994201660156 935.5003662109375" class="subtraction1"><defs><pattern id="img-subtraction1" patternContentUnits="userSpaceOnUse" width="100%" height="100%"><image xlink:href="assets/subtraction1.png" x="0" y="0" width="420.00px" height="934.00px" /></pattern></defs><path d="M 380.9997253417969 934.0003662109375 L 38.99971389770508 934.0003662109375 C 33.73477172851562 934.0003662109375 28.62736129760742 932.9690551757812 23.81936073303223 930.9354248046875 C 19.17524337768555 928.9710693359375 15.00442028045654 926.1590576171875 11.42289066314697 922.5773315429688 C 7.84100866317749 918.9954223632812 5.029008388519287 914.8245849609375 3.06489086151123 910.1804809570312 C 1.031243920326233 905.3724975585938 6.744743586750701e-05 900.2649536132812 0.0001850944972829893 894.9996337890625 L 0.0001850944972829893 39.00060653686523 C 6.744743586750701e-05 33.73530960083008 1.031243920326233 28.62778282165527 3.06489086151123 23.81978225708008 C 5.029008388519287 19.1756649017334 7.84100866317749 15.00484085083008 11.42289066314697 11.42295837402344 C 15.00442028045654 7.841193675994873 19.17524337768555 5.029193878173828 23.81936073303223 3.064840793609619 C 28.62724304199219 1.031193733215332 33.73465728759766 0.000134894871735014 38.99971389770508 0.000134894871735014 L 92.96006774902344 0.000134894871735014 L 92.96006774902344 4.031075954437256 C 92.96018218994141 16.71366500854492 103.2775955200195 27.03166389465332 115.9595947265625 27.03166389465332 L 304.0398254394531 27.03166389465332 C 316.7218322753906 27.03166389465332 327.0394897460938 16.71366500854492 327.0394897460938 4.031075954437256 L 327.0394897460938 1.724781759548932e-05 L 380.9997253417969 0.000134894871735014 C 386.2647705078125 0.000134894871735014 391.3721923828125 1.031193733215332 396.1800537109375 3.064840793609619 C 400.8241882324219 5.029193878173828 404.9949951171875 7.841193675994873 408.57666015625 11.42295837402344 C 412.1582946777344 15.00460529327393 414.9703063964844 19.17554664611816 416.9346618652344 23.81978225708008 C 418.9682922363281 28.62789916992188 419.9996032714844 33.73554611206055 419.9996032714844 39.00060653686523 L 419.9996032714844 894.9996337890625 C 419.9996032714844 900.2647094726562 418.9682922363281 905.3723754882812 416.9346618652344 910.1804809570312 C 414.9703063964844 914.82470703125 412.1582946777344 918.9956665039062 408.57666015625 922.5773315429688 C 404.9949951171875 926.1590576171875 400.8241882324219 928.9710693359375 396.1800537109375 930.9354248046875 C 391.372314453125 932.9689331054688 386.264892578125 934.0001220703125 380.9997253417969 934.000244140625 L 380.9997253417969 934.0003662109375 Z" fill="url(#img-subtraction1)" /></svg>
</div>
        <div data-layer="4a0326c6-a020-4321-b32f-b2c6bb93f948" class="checkOutAnExclusiveLiveWithSaquonBarkley">Check out an exclusive live with  Saquon Barkley!</div>
</div>

    `;
  }
}
customElements.define('finalPrototype-element', FinalPrototype);

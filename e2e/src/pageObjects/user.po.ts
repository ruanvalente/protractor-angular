import { browser, by, element } from "protractor";

export class UserPage {
  navegarParaHome() {
    return browser.get("/#/user/flavio");
  }

  navegarParaImagens(imageText: string) {
    element(by.tagName("img")).click();
  }

  navegarParaImagemEspecifica(imageID) {
    return browser.get(`/#/p/${imageID}`);
  }

  preencherInputDePesquisa(imageText) {
    const input = element(by.id("searchImage"));
    input.sendKeys(imageText);
  }

  pegarBotaoDePesquisa() {
    return element(by.css('button[type="submit"]'));
  }

  comentarNaImagem(comment) {
    element(by.css("textarea")).sendKeys(comment);
    browser.sleep(4000)
    element(by.css('button[type="submit"]')).click();
    browser.sleep(4000)
  }

  pegarUrlDaImagemEspecifica() {
    browser.getCurrentUrl().then((url) => url.split("/#/p/")[1]);
  }

  verificarSeFoiComentadoFoiPublicado() {
    const comments = element
      .all(by.id("comments"))
      .all(by.css("p"));
    return comments.get(0).getText();
  }

  pegarIdDasFotos() {
    let value;
    value = element.all(by.css(".list-unstyled li div")).reduce((acc, elem) => {
      return elem.getText().then((text) => {
        return acc + text + " ";
      });
    }, "");
  }
}

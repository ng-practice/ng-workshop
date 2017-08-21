import { Directive, Renderer2, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[trLinkify]'
})
export class LinkifyDirective {
  urls = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  hyperLinks = /<a.+><\/a>/;
  fromHyperLinkToURL = /(<a.+href=".+" target="_blank">)(.+)(<\/a>)/

  constructor(
    private renderer: Renderer2,
    private element: ElementRef) { }

  @HostListener('focus')
    convertFromLink() {
      let content = this.element.nativeElement.value;
      content = content.replace(this.fromHyperLinkToURL, '$2');
      this.renderer.setProperty(this.element.nativeElement, 'value', content);
    }

  @HostListener('blur')
  convertToLink() {
    const content = this.element.nativeElement.value;

    const foundUrls = content.match(this.urls);
    console.log(foundUrls);

    //const foundLinks = content.replace(this.hyperLinks, link => ;
    //console.log(foundLinks);

    const contentWithLinks = content.replace(this.urls, url =>
      `<a contenteditable="false" href="${url}" target="_blank">${url}</a>`
    );

     this.renderer.setProperty(this.element.nativeElement, 'value', contentWithLinks);
  }
}

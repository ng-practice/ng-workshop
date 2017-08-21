import { Directive, OnInit, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[trLinkify]'
})
export class LinkifyDirective {
  urls = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
  fromHyperLinkToURL = /(<a.+href=".+" target="_blank">)(.+)(<\/a>)/;

  constructor(
    private control: NgControl) { }

  @HostListener('focus')
    convertFromLink() {
      let content = this.control.control.value;
      content = content.replace(this.fromHyperLinkToURL, '$2');
      this.control.control.setValue(content);
    }

  @HostListener('blur')
  convertToLink() {
    const content = this.control.control.value;
    const foundUrls = content.match(this.urls);
    const contentWithLinks = content.replace(this.urls, url =>
      `<a contenteditable="false" href="${url}" target="_blank">${url}</a>`
    );
    this.control.control.setValue(contentWithLinks);
  }
}

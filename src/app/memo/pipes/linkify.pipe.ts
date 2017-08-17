import { Pipe, PipeTransform } from '@angular/core';

import { Memo } from './../models/memo';

@Pipe({ name: 'linkify' })
export class Linkify implements PipeTransform {
  transform(content) {
    const urls = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

    return content.replace(urls, url =>
      `<a contenteditable="false" href="${url}" target="_blank">${url}</a>`
    );
  }
}

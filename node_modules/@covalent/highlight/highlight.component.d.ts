import { AfterViewInit, ElementRef, Renderer } from '@angular/core';
export declare class TdHighlightComponent implements AfterViewInit {
    private renderer;
    language: string;
    content: ElementRef;
    constructor(renderer: Renderer);
    ngAfterViewInit(): void;
    render(contents: string, codeElement: HTMLElement): void;
}

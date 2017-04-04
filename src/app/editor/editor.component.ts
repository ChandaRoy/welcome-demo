import { Component, OnInit, OnDestroy, AfterViewInit, EventEmitter, Input, Output  } from '@angular/core';

@Component({
  selector: 'tiny-editor',
  template: '<textarea id="{{elementId}}"></textarea>',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
@Output() onEditorKeyup = new EventEmitter<any>();

editor;

ngAfterViewInit() {

    tinymce.init({
      selector: '#' + this.elementId,
      color_picker_callback: function(callback, value) {
    callback('red');
  },
      inline:false,
      nowrap:true,
      object_resizing : true,
      file_browser_callback_types: 'file image media',
      file_picker_types: 'file image media',
      plugins: [
   'advlist  lists link image   preview hr  ',
   'insertdatetime media  save table ',
   'emoticons  textcolor colorpicker  imagetools'
 ],
 toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | preview media | forecolor backcolor emoticons',
  relative_urls: false,
 image_advtab: true,
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup', () => {
          const content = editor.getContent();
          this.onEditorKeyup.emit(content);
        });
      },
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}

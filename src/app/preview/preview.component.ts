import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
  @Input() set savedContent(content) {
    this._content = content;
    if (this.editor) {
      this.render(this.form.value)
    }
  };
  form: FormGroup;
  editor: any;
  _content: string;
  showDate = true;

  config = {
    height: 500,
    width: '210mm',
    setup : (ed) => {
      console.log('setup')
      this.editor = ed;
    },
    plugins: 'export print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap mentions quickbars linkchecker emoticons advtable',
    menubar: false,
    toolbar: false,
    templates: [],
    template_replace_values: null,
    variable_prefix: "[",
    variable_suffix: "]",
    autosave_interval: '20s'
  }

  constructor(private _fb: FormBuilder) {
    this.form = _fb.group({
      CreationDate: [new Date()],
      LoanNumber: ['']
    })
  }

  onSubmit() {
    this.render(this.form.value);
  }

  render(value) {
    this.editor.setContent('');
    this.editor.settings.template_replace_values = value;
    this.editor.execCommand('mceInsertTemplate', false, this._content);
    this.editor.mode.set('readonly');
  }

  onShowDateChange() {
    if (!this.showDate) {
      this.render({... this.form.value, CreationDate: ''})
    } else {
      this.render(this.form.value);
    }
  }
}

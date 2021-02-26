import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {
  @Input() set savedContent(content) {
    this._content = content;
    if (this.editor) {
      this.render(this.form.value);
    }
  }

  form: FormGroup;
  editor: any;
  _content: string;
  showDate = true;

  config = {
    height: 500,
    width: '210mm',
    setup: (ed) => {
      console.log('setup');
      this.editor = ed;
    },
    plugins: 'export print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap mentions quickbars linkchecker emoticons advtable',
    menubar: false,
    toolbar: false,
    templates: [],
    template_replace_values: null,
    variable_prefix: '[',
    variable_suffix: ']',
    autosave_interval: '20s'
  };

  constructor(private _fb: FormBuilder) {
    this.form = _fb.group({
      bankName: ['HSBC'],
      bankAddress: ['31 Oxford, London'],
      bankZip: ['EC4M 7AW'],
      CreationDate: [new Date().toISOString().split('T')[0]],
      reference: [''],
      saleTo: ['Czarnikow Sugar Pte Ltd CN'],
      purchase: ['Mitr Phol CN'],
      goods: ['Mt White Refined Sugar'],
      currency: ['USD'],
      amount: ['571,790.56'],
    });
  }

  onSubmit(): void {
    this.render(this.form.value);
  }

  render(value): void {
    this.editor.setContent('');
    this.editor.settings.template_replace_values = value;
    this.editor.settings.template_replace_values = {
      ...this.editor.settings.template_replace_values,
      documents: [{value: 'Doc1'}, {value: 'Doc2'}]
    };
    this.editor.execCommand('mceInsertTemplate', false, this._content);
    this.editor.mode.set('readonly');
    this.iterateData();
  }

  onShowDateChange(): void {
    if (!this.showDate) {
      this.render({...this.form.value, CreationDate: ''});
    } else {
      this.render(this.form.value);
    }
  }

  iterateData(): void {
    const variables = [
      {
        name: 'supportingDocs',
        values: ['Doc1', 'Doc2']
      }
    ];
    const content = this.editor.getContent();

    const container = document.createElement('div');
    container.innerHTML = content;
    const iterables = container.querySelectorAll('.iterable') as NodeListOf<HTMLElement>;
    Array.from(iterables).forEach((el) => {
      const object = el.dataset.object;
      const itemsContainer = el.querySelector('.iterable-container');
      const item = el.querySelector('.iterationItem');
      const data = variables.find(variable => variable.name === object);
      itemsContainer.innerHTML = '';
      data.values.forEach(value => {
        const newItem = item.cloneNode() as HTMLElement;
        newItem.innerHTML = value;
        itemsContainer.appendChild(newItem);
      });
    });
    this.editor.setContent(container.innerHTML);
  }
}

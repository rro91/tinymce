import {Component, OnInit, ViewChild} from '@angular/core';
import {Banks, Templates, IBank, ITemplate, Items} from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  previewMode = false;
  banks = Banks;
  items = Items;
  templates: ITemplate[] = Templates;
  chosenBank: IBank = null;
  editor: any;
  savedContent: string;
  config = {
    height: 500,
    width: '210mm',
    setup : (ed) => {
      this.editor = ed;
      ed.on('StoreDraft', (event) => {
        console.log('saved: ', event);
        this.savedContent = ed.getContent();
      });
      ed.on('keydown', (event) => {
        if (event.keyCode === 9) { // tab pressed
          ed.execCommand('mceInsertContent', false, '&emsp;&emsp;'); // inserts tab
          event.preventDefault();
          return false;
        }
        if (event.keyCode === 32) { // space bar
          if (event.shiftKey) {
            ed.execCommand('mceInsertContent', false, '&hairsp;'); // inserts small space
            event.preventDefault();
            return false;
          }
        }
      });
    },
    plugins: 'export print preview powerpaste casechange importcss tinydrive searchreplace autolink autosave save directionality advcode visualblocks visualchars fullscreen image link media mediaembed template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists checklist wordcount tinymcespellchecker a11ychecker imagetools textpattern noneditable help formatpainter permanentpen pageembed charmap mentions quickbars linkchecker emoticons advtable',
    menubar: false,
    toolbar1: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | forecolor backcolor casechange permanentpen removeformat | pagebreak | image template link export | fullscreen preview print',
    toolbar2: 'alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist',
    templates: this.templates,
    template_replace_values: this.chosenBank,
    template_preview_replace_values: this.chosenBank,
    variable_prefix: '[',
    variable_suffix: ']',
    autosave_interval: '20s',
  };

  onEditorChange(e): void {
  }

  onBankChange(e): void {
    this.chosenBank = this.banks.find(bank => bank.id === +e.target.value);
    this.editor.settings.template_replace_values = this.chosenBank;
    this.editor.settings.template_preview_replace_values = this.chosenBank;
  }

  onItemChange(e): void {
    const chosenVariable =  this.items.find(item => item.id === +e.target.value);
    this.editor.execCommand('mceInsertContent', false, `{$${chosenVariable.name}}`);

  }

  onSave(e): void {
    console.log(e);
  }

  onModeChange(): void {
    this.previewMode = !this.previewMode;
    this.editor.mode.set(this.previewMode ? 'readonly' : 'design');
  }

  saveContent(): void {
    this.savedContent = this.editor.getContent();
    console.log(this.savedContent);
  }
}

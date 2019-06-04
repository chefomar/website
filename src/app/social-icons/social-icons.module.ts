import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwitterComponent } from './twitter/twitter.component';
import { LinkedinComponent } from './linkedin/linkedin.component';
import { GithubComponent } from './github/github.component';
import { StackoverflowComponent } from './stackoverflow/stackoverflow.component';
import { EmailComponent } from './email/email.component';

@NgModule({
  declarations: [TwitterComponent, LinkedinComponent, GithubComponent, StackoverflowComponent, EmailComponent],
  imports: [
    CommonModule
  ],
  exports: [TwitterComponent, LinkedinComponent, GithubComponent, StackoverflowComponent, EmailComponent]
})
export class SocialIconsModule { }

import { RouteMeta } from '@analogjs/router';
import { metaWith } from '~/app/shared/meta/meta.util';
import { Component } from '@angular/core';
import { MainSectionDirective } from '~/app/shared/layout/main-section.directive';
import { SectionIntroComponent } from '~/app/shared/layout/section-intro.component';
import { PageNavComponent } from '~/app/shared/layout/page-nav/page-nav.component';
import { PageBottomNavLinkComponent } from '~/app/shared/layout/page-bottom-nav/page-bottom-nav-link.component';
import { PageBottomNavComponent } from '~/app/shared/layout/page-bottom-nav/page-bottom-nav.component';
import { SectionSubHeadingComponent } from '~/app/shared/layout/section-sub-heading.component';
import { CodeComponent } from '~/app/shared/code/code.component';
import {
  hlmBlockquote,
  hlmCode,
  hlmH1,
  hlmH2,
  hlmH3,
  hlmH4,
  hlmLarge,
  hlmLead,
  hlmMuted,
  hlmP,
  hlmSmall,
  hlmUl,
} from '@spartan-ng/ui-typography-helm';
import { TabsComponent } from '~/app/shared/layout/tabs.component';
import TypographyPreviewComponent, {
  blockquoteCode,
  codeCode,
  h1Code,
  h2Code,
  h3Code,
  h4Code,
  largeCode,
  leadCode,
  listCode,
  mutedCode,
  pCode,
  smallCode,
  themingCode,
} from './typography.preview';
import { CodePreviewDirective } from '~/app/shared/code/code-preview.directive';
import { PageNavLinkComponent } from '~/app/shared/layout/page-nav/page-nav-link.component';

export const routeMeta: RouteMeta = {
  data: { breadcrumb: 'Typography' },
  meta: metaWith('spartan - Typography', 'Styles for headings, paragraphs, lists... etc.'),
  title: 'spartan - Typography',
};

@Component({
  selector: 'spartan-dark-mode',
  standalone: true,
  imports: [
    MainSectionDirective,
    SectionIntroComponent,
    PageBottomNavComponent,
    PageBottomNavLinkComponent,
    PageNavComponent,
    SectionSubHeadingComponent,
    CodeComponent,
    TabsComponent,
    TypographyPreviewComponent,
    CodePreviewDirective,
    PageNavLinkComponent,
  ],
  template: `
    <section spartanMainSection>
      <spartan-section-intro name="Typography" lead="Styles for headings, paragraphs, lists... etc." />

      <spartan-tabs firstTab="Preview" secondTab="Code">
        <div spartanCodePreview firstTab>
          <spartan-typography-preview />
        </div>
        <spartan-code secondTab [code]="themingCode" />
      </spartan-tabs>

      <spartan-section-sub-heading id="installation">Installation</spartan-section-sub-heading>
      <spartan-tabs class="mt-4" firstTab="Nx Plugin">
        <spartan-code firstTab language="sh" code="npx nx @spartan-ng/nx:ui typography" />
      </spartan-tabs>

      <spartan-section-sub-heading id="h1">h1</spartan-section-sub-heading>
      <spartan-tabs firstTab="Preview" secondTab="Code">
        <div spartanCodePreview firstTab><h1 class="${hlmH1}">Taxing Laughter: The Joke Tax Chronicles</h1></div>
        <spartan-code secondTab [code]="h1Code" />
      </spartan-tabs>
      <spartan-section-sub-heading id="h2">h2</spartan-section-sub-heading>
      <spartan-tabs firstTab="Preview" secondTab="Code">
        <div spartanCodePreview firstTab><h2 class="${hlmH2}">The People of the Kingdom</h2></div>
        <spartan-code secondTab [code]="h2Code" />
      </spartan-tabs>
      <spartan-section-sub-heading id="h3">h3</spartan-section-sub-heading>
      <spartan-tabs firstTab="Preview" secondTab="Code">
        <div spartanCodePreview firstTab><h3 class="${hlmH3}">The Joke Tax</h3></div>
        <spartan-code secondTab [code]="h3Code" />
      </spartan-tabs>
      <spartan-section-sub-heading id="h4">h4</spartan-section-sub-heading>
      <spartan-tabs firstTab="Preview" secondTab="Code">
        <div spartanCodePreview firstTab><h4 class="${hlmH4}">People stopped telling jokes</h4></div>
        <spartan-code secondTab [code]="h4Code" />
      </spartan-tabs>
      <spartan-section-sub-heading id="p">p</spartan-section-sub-heading>
      <spartan-tabs firstTab="Preview" secondTab="Code">
        <div spartanCodePreview firstTab>
          <p class="${hlmP}">
            The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke
            tax.
          </p>
        </div>
        <spartan-code secondTab [code]="pCode" />
      </spartan-tabs>

      <spartan-section-sub-heading id="blockquote">Blockquote</spartan-section-sub-heading>
      <spartan-tabs firstTab="Preview" secondTab="Code">
        <div spartanCodePreview firstTab>
          <blockquote class="${hlmBlockquote}">
            "After all," he said, "everyone enjoys a good joke, so it's only fair that they should pay for the
            privilege."
          </blockquote>
        </div>
        <spartan-code secondTab [code]="blockquoteCode" />
      </spartan-tabs>

      <spartan-section-sub-heading id="list">list</spartan-section-sub-heading>
      <spartan-tabs firstTab="Preview" secondTab="Code">
        <div spartanCodePreview firstTab>
          <ul class="${hlmUl}">
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
          </ul>
        </div>
        <spartan-code secondTab [code]="listCode" />
      </spartan-tabs>

      <spartan-section-sub-heading id="inline-code">Inline Code</spartan-section-sub-heading>
      <spartan-tabs firstTab="Preview" secondTab="Code">
        <div spartanCodePreview firstTab>
          <code class="${hlmCode}">@radix-ui/react-alert-dialog</code>
        </div>
        <spartan-code secondTab [code]="codeCode" />
      </spartan-tabs>

      <spartan-section-sub-heading id="lead">Lead</spartan-section-sub-heading>
      <spartan-tabs firstTab="Preview" secondTab="Code">
        <div spartanCodePreview firstTab>
          <p class="${hlmLead}">
            A modal dialog that interrupts the user with important content and expects a response.
          </p>
        </div>
        <spartan-code secondTab [code]="leadCode" />
      </spartan-tabs>

      <spartan-section-sub-heading id="large">Large</spartan-section-sub-heading>
      <spartan-tabs firstTab="Preview" secondTab="Code">
        <div spartanCodePreview firstTab>
          <p class="${hlmLarge}">Are you sure absolutely sure?</p>
        </div>
        <spartan-code secondTab [code]="largeCode" />
      </spartan-tabs>

      <spartan-section-sub-heading id="small">Small</spartan-section-sub-heading>
      <spartan-tabs firstTab="Preview" secondTab="Code">
        <div spartanCodePreview firstTab>
          <p class="${hlmSmall}">Email address</p>
        </div>
        <spartan-code secondTab [code]="smallCode" />
      </spartan-tabs>

      <spartan-section-sub-heading id="muted">Muted</spartan-section-sub-heading>
      <spartan-tabs firstTab="Preview" secondTab="Code">
        <div spartanCodePreview firstTab>
          <p class="${hlmMuted}">Enter your email address.</p>
        </div>
        <spartan-code secondTab [code]="mutedCode" />
      </spartan-tabs>

      <spartan-page-bottom-nav>
        <spartan-page-bottom-nav-link href="figma" label="Figma" />
        <spartan-page-bottom-nav-link direction="previous" href="dark-mode" label="Dark Mode" />
      </spartan-page-bottom-nav>
    </section>

    <spartan-page-nav>
      <spartan-page-nav-link fragment="installation" label="Installation" />
      <spartan-page-nav-link fragment="h1" label="h1" />
      <spartan-page-nav-link fragment="h2" label="h2" />
      <spartan-page-nav-link fragment="h3" label="h3" />
      <spartan-page-nav-link fragment="h4" label="h4" />
      <spartan-page-nav-link fragment="p" label="p" />
      <spartan-page-nav-link fragment="blockquote" label="blockquote" />
      <spartan-page-nav-link fragment="list" label="list" />
      <spartan-page-nav-link fragment="inline-code" label="Inline code" />
      <spartan-page-nav-link fragment="muted" label="Muted" />
      <spartan-page-nav-link fragment="small" label="Small" />
      <spartan-page-nav-link fragment="large" label="Large" />
      <spartan-page-nav-link fragment="lead" label="Lead" />
    </spartan-page-nav>
  `,
})
export default class TypographyPageComponent {
  protected readonly themingCode = themingCode;
  protected readonly h1Code = h1Code;
  protected readonly h2Code = h2Code;
  protected readonly h3Code = h3Code;
  protected readonly h4Code = h4Code;
  protected readonly pCode = pCode;
  protected readonly blockquoteCode = blockquoteCode;
  protected readonly listCode = listCode;
  protected readonly codeCode = codeCode;
  protected readonly mutedCode = mutedCode;
  protected readonly smallCode = smallCode;
  protected readonly largeCode = largeCode;
  protected readonly leadCode = leadCode;
}
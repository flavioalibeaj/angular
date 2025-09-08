import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// GITHUB DEPLOYMENT
// Krijo repon ne github dhe hidh projektin
// Shko te settings te repos, tek Pages dhe sigurohu qe te jete i zgjedhur opsioni Deploy from branch (branchi nga do behet deploy do gjenerohet me vone gjate procesit te deploy) dhe gjithashtu duhet te jete i zgjedhur opsioni /root
// Tek projekti ne visual studio code instalo kte npm install -g angular-cli-ghpages dhe shif si e ke output path tek angular.json (une e kisha "outputPath": "dist/test-project")
// Beji build projektit  ng build --configuration production --base-href "/testProject/"
// Pastaj ekzekuto kte  npx angular-cli-ghpages --dir=dist/test-project
// Ne kete moment te krijohet nje branch gh-pages dhe mund ta zgjedhesh dhe ate si branch
// Po dhe me master funksionon

// TODO learn how to apply micro frontends
// TODO learn auth0
// TODO learn firebase
// TODO learn stripe
// TODO learn ssr
// TODO implement ngrx signal store
// TODO learn change detection
// TODO learn angular AI integration // https://github.com/angular/examples
// https://www.angulartraining.com/daily-newsletter/
// https://certificates.dev/angular#top --- username: tedi@dev.al --- password: 6:VZK'@mk4NKx4r
// https://angular.love/
// https://courses.angulartraining.com/courses
// https://blog.angular-university.io/
// TODO learn PWA // https://web.dev/explore/progressive-web-apps
// TODO learn defer blocks
// TODO ke base 64 reading te pms management i think

// ----REPOS----
// https://github.com/trungvose/angular-spotify
// https://github.com/bitwarden/clients
// https://github.com/gothinkster/angular-realworld-example-app
// https://github.com/spartan-ng/spartan
// https://github.com/ng-matero/ng-matero
// https://github.com/suxrobGM/logistics-app
// https://github.com/DavideViolante/Angular-Full-Stack
// https://github.com/HouseOfAngular/angular-love
// https://github.com/perfect-stack/perfect-stack
// https://github.com/truenas/webui
// https://github.com/taiga-family/taiga-ui
// https://github.com/kubernetes/dashboard/tree/master/modules/web/src
// https://github.com/Foblex/f-flow
// https://github.com/Klaster1/timer-5
// https://github.com/sero-dev/pandauth/tree/main/Pandauth.Web
// https://github.com/stefanoslig/angular-ngrx-nx-realworld-example-app
// https://github.com/wlucha/angular-starter
// https://github.com/coreui/coreui-free-angular-admin-template
// https://github.com/coreui/coreui-angular/
// https://github.com/openorch/openorch
// https://github.com/AmruthPillai/Reactive-Resume
// https://github.com/niraj-khatiwada/ultimate-nestjs-boilerplate
// https://github.com/twentyhq/twenty
// https://github.com/calcom/cal.com/tree/main/apps/api/v2
// https://github.com/staart/api
// https://github.com/amplication/amplication
// https://github.com/nestjs/awesome-nestjs
// https://github.com/gobeam/truthy
// https://github.com/CollatzConjecture/nestjs-clean-architecture-postgres
// https://github.com/NightClover-code?tab=repositories
// https://github.com/CatsMiaow/nestjs-project-structure
// https://github.com/apereo/cas
// https://github.com/Arcade1080/zauberstack
// https://github.com/fifocode/wimm-apis
// https://github.com/IbrahemHadidy/red-steam-backend
// https://github.com/chanmyaemaung/digital-stock-api
// https://github.com/phyohtetarkar/hope-elearning-backend
// https://github.com/nullpwntrops/simple-auth-backend
// https://github.com/samchon/shopping-backend
// https://github.com/wrtnlabs/autobe-example-shopping
// https://github.com/brocoders/nestjs-boilerplate

// ----LINKS----
// https://www.reddit.com/r/Angular2/comments/1k5uv0g/who_are_your_goto_angular_experts/
// https://javascript.plainenglish.io/angular-20-naming-convention-in-practice-from-confusion-to-an-ai-chat-app-17c710c9ed9b
// https://ngtips.com/
// https://google.github.io/styleguide/tsguide.html
// https://ngxui.com/
// https://taiga-ui.dev/getting-started
// https://blog.angular-university.io/angular-service-worker/
// https://blog.angular-university.io/angular-material-data-table/
// https://blog.angular-university.io/angular-push-notifications/
// https://blog.angular-university.io/angular-innerhtml/
// https://blog.angular-university.io/angular-performance-tuning/
// https://blog.angular-university.io/angular-2-what-is-unidirectional-data-flow-development-mode/
// https://angular.love/angular-router-everything-you-need-to-know-about
// https://refactoring.guru/design-patterns/command
// https://github.com/nestjs/nest/tree/master/sample
// https://typeorm.io/
// https://wanago.io/
// https://orkhan.gitbook.io/typeorm
// https://medium.com/@danielfilipkowskiblogs/adding-google-analytics-to-angular-v15-1766c4bdaed5
// https://akhilabhinav.medium.com/
// https://blog.angular-university.io/why-a-single-page-application-what-are-the-benefits-what-is-a-spa/
// https://angularexperts.io/blog
// https://medium.com/@ahureinebenezer/mastering-data-validation-in-nestjs-a-complete-guide-with-class-validator-and-class-transformer-02a029db6ecf
// https://bhargavacharyb.medium.com/nestjs-5-understanding-entities-and-relationships-in-nestjs-with-typeorm-an-e-commerce-example-7cd3ee3d0174
// https://www.angulararchitects.io/en/blog/
// https://www.freecodecamp.org/learn/relational-database/
// https://www.freecodecamp.org/learn/back-end-development-and-apis/
// https://www.youtube.com/playlist?list=PLkZU2rKh1mT-3VvYvGCdRVCCJ5lCtOKED
// https://typescript-is-like-csharp.chrlschn.dev/pages/intermediate/nest-vs-controller-api.html
// https://typescript-is-like-csharp.chrlschn.dev/pages/intermediate/databases-and-orms.html
// https://www.reddit.com/r/Nestjs_framework/comments/1igj3sv/i_created_an_advanced_scalable_nestjs_boilerplate/

// ----UI Libraries----
// https://angularprimitives.com/
// https://www.pacyfist.dev/posts/angular-19-tailwind-4-and-scss-a-modern-step-by-step-setup-guide/
// https://webcode.tools/css-generator/keyframe-animation
// https://ng.ant.design/docs/introduce/en

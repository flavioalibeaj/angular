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
// todo NgOptimizedImage;
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
// TODO Firebase RememberMe functionality
// TODO learn supabase
// TODO check cloudflare
// todo check webhooks
// todo check by link

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
// https://www.angularspace.com/decomposition-your-real-superpower/

// ----UI Libraries----
// https://angularprimitives.com/
// https://www.pacyfist.dev/posts/angular-19-tailwind-4-and-scss-a-modern-step-by-step-setup-guide/
// https://webcode.tools/css-generator/keyframe-animation
// https://ng.ant.design/docs/introduce/en
// https://daisyui.com/
// https://primeng.org/

// SIGNAL STORE DEMO
// export interface Todo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

// export interface TodosState {
//   todos: Todo[];
//   isLoading: boolean;
// }

// const initialState: TodosState = {
//   todos: [
//     // {
//     //   completed: true,
//     //   id: 1,
//     //   title: 'Start Learning Signal Store',
//     //   userId: 1,
//     // },
//     // {
//     //   completed: false,
//     //   id: 2,
//     //   title: 'Finish Learning Signal Store',
//     //   userId: 1,
//     // },
//   ],
//   isLoading: false,
// };

// export const TodosStore = signalStore(
//   // {providedIn: "root"},
//   withEntities<Todo>(),
//   withState(initialState),
//   withComputed((store) => ({
//     completedTasks: computed(() => store.todos().filter((t) => !!t.completed)),
//   })),
//   withProps(() => ({
//     todosService: inject(TodosService),
//   })),
//   withMethods(({ todosService, ...store }) => ({
//     getAll: rxMethod<void>(
//       pipe(
//         tap(() => patchState(store, { isLoading: true })),
//         switchMap(() =>
//           todosService.getAll$().pipe(
//             tap((todos) => {
//               patchState(store, { todos });
//             }),
//             tap(console.warn),
//             finalize(() => {
//               patchState(store, { isLoading: false });
//             })
//           )
//         )
//       )
//     ),
//     // addTodo(todo: Todo): void {
//     //   patchState(store, addEntity(todo));
//     // },
//     // removeEmptyTodos(): void {
//     //   patchState(
//     //     store,
//     //     removeEntities(({ text }) => !text)
//     //   );
//     // },
//     // completeAllTodos(): void {
//     //   patchState(store, updateAllEntities({ completed: true }));
//     // },
//   })),
//   withHooks({
//     onInit(store) {
//       store.getAll();
//       //   effect(() => {
//       //     const state = getState(store);
//       //     console.log('counter state', state);
//       //   });
//     },
//   })
// );

// https://www.udemy.com/course/the-complete-guide-to-angular-2/?couponCode=MT251103G1
// https://www.udemy.com/course/master-nestjs-the-javascript-nodejs-framework/
// https://www.udemy.com/course/nestjs-masterclass-complete-course/
// https://www.udemy.com/course/nestjs-microservices-build-deploy-a-scaleable-backend/
// https://www.udemy.com/course/nestjs-zero-to-hero/
// https://www.udemy.com/course/nestjs-the-complete-developers-guide/learn/lecture/27442276#overview
// https://www.quora.com/Why-is-it-a-bad-idea-to-save-authentication-token-in-localStorage
// https://www.google.com/search?q=is+it+a+good+practice+to+store+token+on+window+instead+of+local+storage&oq=is+it+a+good+practice+to+store+token+on+window+instead+of+local+storage&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigATIHCAUQIRigAdIBCTE0NTU5ajBqN6gCALACAA&sourceid=chrome&ie=UTF-8
// https://www.google.com/search?q=angular+ssr+vs+ssg+vs+csr&client=firefox-b-d&sca_esv=3a518e04b87d25c3&sxsrf=AHTn8zo8sJzGNkJ9FDlbETRWwxPr-v35tA%3A1747813893439&ei=BYYtaMHMGsmN9u8PvoKo-Ac&ved=0ahUKEwiB44GSirSNAxXJhv0HHT4BCn8Q4dUDCA8&uact=5&oq=angular+ssr+vs+ssg+vs+csr&gs_lp=Egxnd3Mtd2l6LXNlcnAiGWFuZ3VsYXIgc3NyIHZzIHNzZyB2cyBjc3IyBRAAGO8FMggQABiABBiiBEiJFFDqB1jaDHABeACQAQCYAYcBoAHEBqoBAzMuNbgBA8gBAPgBAZgCBKACzgLCAgoQABiwAxjWBBhHwgIIECEYoAEYwwSYAwCIBgGQBgiSBwMyLjKgB50SsgcDMS4yuAfEAg&sclient=gws-wiz-serp
// https://github.com/sonukapoor/ngOptimizedImage-examples/commits/main/
// https://www.google.com/search?q=programming+looping+complexity&oq=programming+looping+complexity&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRifBTIHCAIQIRifBTIHCAMQIRifBdIBCTE0OTExajBqN6gCALACAA&sourceid=chrome&ie=UTF-8
// https://www.google.com/search?q=encrypted+abundance+ebook&client=firefox-b-d&sca_esv=383f604929234591&sxsrf=AE3TifPpGx0SPom5HalIVrsRc9-yn_RHWg%3A1749628484232&ei=RDZJaJf2DeKzi-gPmeTW6Qk&ved=0ahUKEwiXqKqC8uiNAxXi2QIHHRmyNZ0Q4dUDCA8&uact=5&oq=encrypted+abundance+ebook&gs_lp=Egxnd3Mtd2l6LXNlcnAiGWVuY3J5cHRlZCBhYnVuZGFuY2UgZWJvb2syBRAAGIAEMgsQABiABBiGAxiKBTIFEAAY7wUyCBAAGIAEGKIEMgUQABjvBUi0EVC3AVjBDnABeACQAQCYAdoBoAGBB6oBBTAuNS4xuAEDyAEA-AEBmAIHoAK1B8ICCBAAGIAEGLADwgINEC4YgAQYsAMYQxiKBcICChAAGIAEGEMYigWYAwCIBgGQBgqSBwUxLjUuMaAHgReyBwUwLjUuMbgHrAfCBwUyLTQuM8gHLQ&sclient=gws-wiz-serp
// https://www.google.com/search?q=single+thread+vs+multi+thread+programming+language&oq=single+thread+vs+multi+thread+progr&gs_lcrp=EgZjaHJvbWUqBwgCEAAYgAQyBggAEEUYOTIHCAEQABiABDIHCAIQABiABDINCAMQABiGAxiABBiKBTINCAQQABiGAxiABBiKBTINCAUQABiGAxiABBiKBTINCAYQABiGAxiABBiKBTIKCAcQABiABBiiBDIKCAgQABiABBiiBDIHCAkQABjvBdIBCDk4MDdqMGo3qAIAsAIA&sourceid=chrome&ie=UTF-8
// https://contemplationstation.substack.com/p/why-time-felt-slower-when-we-were-128
// https://ayushithakkar.substack.com/p/practices-that-help-you-understand
// https://www.google.com/search?q=angular+lazy+load+dependencies+reddit&client=firefox-b-d&sca_esv=9fd8d153fdb0abdd&ei=rM6MaM7yDKiA9u8PtY2V2Aw&ved=0ahUKEwjO-Mzk6OmOAxUogP0HHbVGBcsQ4dUDCBA&uact=5&oq=angular+lazy+load+dependencies+reddit&gs_lp=Egxnd3Mtd2l6LXNlcnAiJWFuZ3VsYXIgbGF6eSBsb2FkIGRlcGVuZGVuY2llcyByZWRkaXQyBxAhGKABGApI_F5Q4CBY_F1wCXgBkAEAmAGuAaABrweqAQMwLje4AQPIAQD4AQGYAhCgAroIwgIKEAAYsAMY1gQYR8ICChAAGIAEGEMYigXCAgUQABiABMICBhAAGBYYHsICCxAAGIAEGIYDGIoFwgIIEAAYgAQYogTCAgUQIRigAcICBRAhGJ8FmAMAiAYBkAYIkgcDOS43oAfhHbIHAzAuN7gH8wfCBwYyLTExLjXIB2Y&sclient=gws-wiz-serp
// https://www.google.com/search?q=angular+lazy+load+services+reddit&sca_esv=9fd8d153fdb0abdd&hl=en&ei=R8-MaJ4ow4f27w-ewub4DA&ved=0ahUKEwje57Su6emOAxXDg_0HHR6hGc8Q4dUDCBA&uact=5&oq=angular+lazy+load+services+reddit&gs_lp=Egxnd3Mtd2l6LXNlcnAiIWFuZ3VsYXIgbGF6eSBsb2FkIHNlcnZpY2VzIHJlZGRpdDIIEAAYgAQYogQyCBAAGIAEGKIESMsOUPkBWKsNcAF4AZABAJgBpQGgAcUHqgEDMC43uAEDyAEA-AEBmAIIoAKKCMICChAAGLADGNYEGEfCAgYQABgWGB7CAgsQABiABBiGAxiKBcICBRAhGKABwgIEECEYFcICBRAhGJ8FwgIHECEYoAEYCpgDAIgGAZAGCJIHAzEuN6AHvReyBwMwLje4B4AIwgcFMi02LjLIBzE&sclient=gws-wiz-serp
// https://medium.com/netanelbasal/lazy-load-services-in-angular-bcf8eae406c8
// https://www.reddit.com/r/Angular2/comments/1h7xcrr/angular_devs_is_angular_your_longterm_career/
// https://www.reddit.com/r/Angular2/comments/1jrx8m6/is_scss_still_beneficial_with_the_latest_angular/
// https://www.reddit.com/r/Angular2/comments/1iljcsd/css_architecture_best_practices_for_new_angular/
// https://angular-signal-examples.netlify.app/resource-api/example1
// https://brajrajagrawal.medium.com/hot-vs-cold-observables-in-angular-a-comprehensive-guide-481d39e80309
// https://www.angulartraining.com/?srsltid=AfmBOoo8yqrstCapD1ZBonKQKIDJw0nvKiKgagKxov-0lEZXH68cG53y
// https://www.angulararchitects.io/blog/
// https://pretius.com/blog/angular-ssr
// https://www.reddit.com/r/webdev/comments/1c9txg4/tips_for_the_web_dev_job_hunt/
// https://www.reddit.com/r/webdev/comments/13kucjb/how_to_use_linkedin_the_best_way_for_selftaught/
// https://roadmap.sh/
// instagram for developers
// https://push-based.io/article/dynamic-angular-config-for-ssr
// https://www.angulartraining.com/daily-newsletter/

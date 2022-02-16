/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'PagesController.index').as('index');
Route.get('/videos/:id', 'VideosController.show').as('videos.show');

Route.group(() => {
  Route.post('login', 'AuthController.loginPost').as('login')
  Route.post('register', 'AuthController.registerPost').as('register')
}).prefix('auth').as('auth')

Route.group(() => {
  Route.resource('videos', 'User/VideosController').apiOnly()
  Route.resource('videos/:video_id/likes', 'User/LikesController').apiOnly()
  Route.resource('comments', 'User/CommentsController').apiOnly()
}).prefix('user').as('user').middleware('auth')

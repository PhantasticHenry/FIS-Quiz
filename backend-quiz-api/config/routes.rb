Rails.application.routes.draw do
  resources :quiz_questions
  resources :high_scores
  resources :questions
  resources :quizzes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

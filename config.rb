require 'slim'

Slim::Engine.disable_option_validator!

set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

activate :dotenv
activate :i18n, :mount_at_root => false
activate :autoprefixer

configure :development do
  activate :livereload
end

configure :build do
  activate :minify_html
  activate :minify_css
  activate :minify_javascript
  activate :relative_assets
end

activate :s3_sync do |s3_sync|
  s3_sync.bucket        = ENV['AWS_BUCKET']
  s3_sync.region        = ENV['AWS_REGION']
  aws_access_key_id     = ENV['AWS_ACCESS_KEY_ID']
  aws_secret_access_key = ENV['AWS_SECRET_ACCESS_KEY']
end

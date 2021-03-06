require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Oblakoapp
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    # Add the font path
    config.assets.paths << Rails.root.join('app', 'assets', 'fonts')

    # Include font files to Assets
    config.assets.precompile << /\.(?:svg|eot|woff|ttf)$/

    config.serve_static_assets = true
    config.assets.compile = true

    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
  end
end

# encoding : utf-8

### 
# Compass
###

# Susy grids in Compass
# First: gem install compass-susy-plugin
# require 'susy'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Haml
###

# CodeRay syntax highlighting in Haml
# First: gem install haml-coderay
# require 'haml-coderay'

# CoffeeScript filters in Haml
# First: gem install coffee-filter
# require 'coffee-filter'

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

###
# Page command
###

# Per-page layout changes:
# 
# With no layout
# page "/path/to/file.html", :layout => false
# 
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
# 
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

# Methods defined in the helpers block are available in templates
helpers do
  def some_helper
    "Helping"
  end
  def image_link(url, img)
    "<a href='#{url}'><img src='#{img}' /></a>"
  end
  def link_to_function(name, function)
    "<a href=\"#\" onclick=\"#{function}; return false;\">#{name}</a>"
  end
end

#Encoding.default_external = 'utf-8'

# Change the CSS directory
set :css_dir, "source/css"

# Change the JS directory
set :js_dir, "source/js"

# Change the images directory
set :images_dir, "source/img"

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css
  
  # Minify Javascript on build
  #activate :minify_javascript
  
  # Enable cache buster
  # activate :cache_buster
  
  # Use relative URLs
  # activate :relative_assets
  
  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher
  
  # Or use a different image path
  # set :http_path, "/Content/images/"
end

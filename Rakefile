task :default => :build

desc "Build site"
task :build => :assets do 
  jekyll()
end

desc "Serve site for development"
task :serve => :assets do
  jekyll('serve --trace --drafts --watch')
end

desc "Compile assets"
task :assets do
  grunt()
end

def jekyll(args = 'build')
  system "jekyll #{args}"
end

def grunt(args = '')
  system "grunt #{args}"
end

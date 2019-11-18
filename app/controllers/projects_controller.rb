class ProjectsController < ApplicationController
    def index
        @projects = Project.includes(:todos)
    end
end

class ProjectsController < ApplicationController
    def index
        @projects = Project.includes(:id)
        @todos = 
        respond_to do |format|
            format.html # show.html.erb
            format.json { 
                render json: @projects
             }
           end
    end
end

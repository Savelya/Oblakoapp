class ProjectsController < ApplicationController
    def index
        @projects = Project.all
    end

    def create
        render plain: params[:todo].inspect
    end
end

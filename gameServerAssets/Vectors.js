Vector=function (x,y,z){
    this.x=x;
    this.y=y;
    this.z=z;
    this.getAngle = function(){
        return {
            'xy':Math.atan2(this.z,Math.sqrt(this.x*this.x+this.y*this.y)),
                'yz':Math.atan2(this.x,Math.sqrt(this.y*this.y+this.z*this.z)),
                'xz':Math.atan2(this.y,Math.sqrt(this.x*this.x+this.z*this.z)),
        };
    }
    this.norm = function(){
        return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);
    }

    this.str=function(){
        return '('+this.x+','+this.y+','+this.z+')'
    }
}

Vector.vfns={
    add:function(u,v){
        return new Vector(u.x+v.x,u.y+v.y,u.z+v.z);
    },
    sub:function(u,v){
        return new Vector(u.x-v.x,u.y-v.y,u.z-v.z);
    },
    dot:function(u,v){
        return u.x*v.x+u.y*v.y+u.z*v.z;
    },
    cross:function(u,v){
        return new Vector(u.y * v.z - u.z * v.y,
                u.z * v.x - u.x * v.z,
                u.x * v.y - u.y * v.x);
    },
    scale:function(v,c){
        return new Vector(v.x*c,v.y*c,v.z*c);
    },
    unitVector:function(v){
        return Vector.vfns.scale(v,1.0/v.norm());
    },
    proj:function(u,v){
        var vUnit = Vector.vfns.unitVector(v);
        Vector.vfns.scale(vUnit,Vector.dot(vUnit,u));
    },
    distance:function(u,v){
        return Math.sqrt((u.x - v.x) * (u.x - v.x) + (u.y - v.y) * (u.y - v.y) + (u.z - v.z) * (u.z - v.z));
    },
}

Vector.coords={
    x:new Vector(1,0,0),
    y:new Vector(0,1,0),
    z:new Vector(0,0,1),
}

exports.Vector=Vector;

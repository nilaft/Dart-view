// Dom manipulation done here
// Service was used to simplify the complex problem (inspite of dom manipulation is a strict NO in services)

import { Injectable } from '@angular/core';

@Injectable()
export class StickyheaderService {
  eleList = [];
  _reqframe;
  _container;

  constructor() { 
       this._frame();
  }

  lookup($ele){
      var foundItem = undefined;
      this.eleList.every(item => {
          if(item.ele === $ele){
            foundItem = item;
            return false;
          }

          return true;
      });
      return foundItem
  }

  _frame(){
      this._reqframe = requestAnimationFrame(()=>{
          this._positionEle();
          this._frame();
      })
  }

  _positionEle(){
      if(this._container === undefined){
        return
      }

      this.eleList.forEach(item => {
            var itemOffset = item.ele.getBoundingClientRect();
            var containerOffset = this._container.getBoundingClientRect();      
            var isFloat = false;
            var isShrink = false;

            if(containerOffset.top + 10 > itemOffset.top){
                isFloat = true;
            }
            if(containerOffset.bottom > itemOffset.bottom){
                isShrink = true;
            }
            
            if(item.isFloat === isFloat && item.isShrink === isShrink){
                return
            }

            requestAnimationFrame(()=>{
                try {
                    var classList = item.clone.classList;

                    if(isFloat){
                      classList.add('is-float');
                      item.ele.classList.add('mrsticky-hidden');
                    }
                    else{
                        classList.remove('is-float')
                        item.ele.classList.remove('mrsticky-hidden');
                    }

                    if(isShrink)
                      classList.add('is-shrink')
                    else
                      classList.remove('is-shrink')

                    item.isFloat = isFloat;
                    item.isShrink = isShrink;

                } catch (error) {
                    console.log("Service Header",error);
                }
                
                  
            });

      });
  }

  sticky($ele){
      this._container = document.querySelector('.mrsticky-container');
      var result = this.lookup($ele);
      if(result !== undefined){
          this._update(result)
      }
      else{
          this._addEle($ele)
      }
  }
  
  _update(result){
      result.clone.remove();
      var $clone = this._clone(result.ele);
      result.clone = $clone;
  }

  _clone($ele){
      var $clone = $ele.cloneNode(true);
      var $hdr =  document.querySelector('.mrsticky-container');
      $clone.className += " mrsticky";
      $hdr.appendChild($clone);
      return $clone
  }

  _addEle($ele){
      var $clone = this._clone($ele);

      this.eleList.push({
        key: new Date().getTime() * Math.random(),
        ele : $ele,
        clone: $clone,
        isFloat : false,
        isShrink : false
      })
  }

  remove($ele){
      var result = this.lookup($ele);
      var index = this.eleList.indexOf(result);
      if (index > -1) {
          result.clone.remove();
          this.eleList.splice(index, 1);
      }
  }

}

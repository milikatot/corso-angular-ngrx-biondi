import { Component } from '@angular/core';

@Component({
  selector: 'app-cms',
  standalone: true,
  template: `
    <!--ERROR ALERT-->
    <div class="alert alert-error">Server error</div>

    <div class="flex items-center gap-1">
      <!--ADD-->
      <div class="m-6 cursor-pointer">
        <svg
          width="30"
          viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#ffffff" stroke-width="1.5"
                  stroke-linecap="round"></path>
            <path
              d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
              stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>
          </g>
        </svg>
      </div>

      <!--PENDING-->
      <span class="loading loading-spinner loading-md"></span>
    </div>

    <!--FORM EDIT / ADD-->
    <dialog class="modal bg-black bg-opacity-85" [open]="false">
      <div class="modal-box">
        <h3 class="font-bold text-2lg m-3">
          ADD ITEM
        </h3>
        <div class="flex flex-col gap-3">
          <input
            type="text" placeholder="Product name" class="input input-bordered w-full max-w-xs"
          />
          <div class="flex gap-2">
            <button class="btn" type="button">Close</button>
            <button class="btn" type="submit">Save</button>
          </div>
        </div>
      </div>
    </dialog>

    <!--LIST-->
    <div class="overflow-x-auto">
      <table class="table">
        <!-- head -->
        <thead>
        <tr>
          <th>Preview</th>
          <th>Name</th>
          <th>Type</th>
          <th>Cost</th>
        </tr>
        </thead>

        <tbody>
        <tr>
          <th>...</th>
          <td>Product Name</td>
          <td>Wood</td>
          <td>€ 1</td>
        </tr>
        </tbody>
      </table>
    </div>

  `,
  styles: ``
})
export default class CmsComponent {

}
import {
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  ArrowRight,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  getStarted: ArrowRight,
  logo: (props: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="50" zoomAndPan="magnify" {...props} viewBox="0 0 375 374.999991" height="50" preserveAspectRatio="xMidYMid meet" version="1.0"><rect x="-37.5" width="45" fill="#ffffff" y="-37.499999" height="449.999989" fillOpacity="1"/><path fill="#f1f5f9" d="M 324.148438 195.675781 C 314.023438 198.601562 305.925781 206.324219 302.550781 216.300781 C 284.699219 269.175781 234.75 307.199219 175.949219 307.199219 C 102.226562 307.199219 42.375 247.351562 42.375 173.625 C 42.375 99.898438 102.226562 40.050781 175.949219 40.050781 C 234.75 40.050781 284.773438 78.148438 302.550781 130.949219 C 305.925781 140.925781 314.023438 148.574219 324.148438 151.574219 C 336.226562 155.101562 352.726562 159.824219 367.273438 164.023438 C 371.550781 165.226562 374.476562 169.199219 374.476562 173.625 C 374.476562 178.050781 371.550781 181.949219 367.273438 183.226562 C 352.648438 187.425781 336.226562 192.226562 324.148438 195.675781 Z M 324.148438 195.675781 " fillOpacity="1" fillRule="nonzero"/><path fill="#000000" d="M 295.5 223.050781 L 338.625 210.601562 C 347.324219 208.125 353.25 200.175781 353.25 191.101562 C 353.25 182.101562 347.25 174.148438 338.625 171.601562 C 324.074219 167.398438 307.574219 162.601562 295.574219 159.148438 C 288.675781 157.125 283.199219 151.949219 280.875 145.125 C 261.601562 88.273438 207.75 47.25 144.449219 47.25 C 65.023438 47.25 0.523438 111.675781 0.523438 191.101562 C 0.523438 270.523438 65.023438 334.949219 144.375 334.949219 C 207.675781 334.949219 261.523438 293.925781 280.726562 237.074219 C 283.050781 230.25 288.601562 225.074219 295.5 223.050781 Z M 331.875 191.101562 L 289.800781 203.25 C 276.449219 207.074219 265.800781 217.273438 261.300781 230.398438 C 261.300781 230.398438 261.300781 230.398438 261.300781 230.476562 C 244.875 279.226562 198.75 314.398438 144.449219 314.398438 C 76.425781 314.398438 21.148438 259.125 21.148438 191.101562 C 21.148438 123.074219 76.351562 67.800781 144.449219 67.800781 C 198.75 67.800781 244.875 102.976562 261.300781 151.726562 C 261.300781 151.726562 261.300781 151.726562 261.300781 151.800781 C 265.800781 164.925781 276.449219 175.125 289.800781 178.949219 C 301.5 182.324219 317.550781 186.976562 331.875 191.101562 Z M 331.875 191.101562 " fillOpacity="1" fillRule="nonzero"/><path fill="#000000" d="M 104.773438 191.101562 C 104.773438 191.722656 104.746094 192.339844 104.683594 192.960938 C 104.621094 193.578125 104.53125 194.191406 104.410156 194.800781 C 104.289062 195.410156 104.136719 196.011719 103.957031 196.609375 C 103.777344 197.203125 103.570312 197.789062 103.332031 198.363281 C 103.09375 198.933594 102.828125 199.496094 102.535156 200.042969 C 102.242188 200.59375 101.921875 201.125 101.578125 201.640625 C 101.230469 202.160156 100.863281 202.65625 100.46875 203.136719 C 100.074219 203.617188 99.65625 204.078125 99.21875 204.515625 C 98.777344 204.957031 98.316406 205.375 97.835938 205.769531 C 97.355469 206.160156 96.859375 206.53125 96.34375 206.878906 C 95.824219 207.222656 95.292969 207.542969 94.746094 207.835938 C 94.195312 208.128906 93.636719 208.394531 93.0625 208.628906 C 92.488281 208.867188 91.902344 209.078125 91.308594 209.257812 C 90.714844 209.4375 90.113281 209.589844 89.5 209.710938 C 88.890625 209.832031 88.277344 209.921875 87.660156 209.984375 C 87.042969 210.042969 86.421875 210.074219 85.800781 210.074219 C 85.179688 210.074219 84.558594 210.042969 83.941406 209.984375 C 83.320312 209.921875 82.707031 209.832031 82.097656 209.710938 C 81.488281 209.589844 80.886719 209.4375 80.292969 209.257812 C 79.695312 209.078125 79.113281 208.867188 78.539062 208.628906 C 77.964844 208.394531 77.402344 208.128906 76.855469 207.835938 C 76.308594 207.542969 75.773438 207.222656 75.257812 206.878906 C 74.742188 206.53125 74.242188 206.160156 73.761719 205.769531 C 73.28125 205.375 72.820312 204.957031 72.382812 204.515625 C 71.941406 204.078125 71.527344 203.617188 71.132812 203.136719 C 70.738281 202.65625 70.367188 202.160156 70.023438 201.640625 C 69.675781 201.125 69.359375 200.59375 69.066406 200.042969 C 68.773438 199.496094 68.507812 198.933594 68.269531 198.363281 C 68.03125 197.789062 67.824219 197.203125 67.640625 196.609375 C 67.460938 196.011719 67.3125 195.410156 67.191406 194.800781 C 67.066406 194.191406 66.976562 193.578125 66.917969 192.960938 C 66.855469 192.339844 66.824219 191.722656 66.824219 191.101562 C 66.824219 190.480469 66.855469 189.859375 66.917969 189.238281 C 66.976562 188.621094 67.066406 188.007812 67.191406 187.398438 C 67.3125 186.789062 67.460938 186.1875 67.640625 185.59375 C 67.824219 184.996094 68.03125 184.414062 68.269531 183.839844 C 68.507812 183.265625 68.773438 182.703125 69.066406 182.15625 C 69.359375 181.605469 69.675781 181.074219 70.023438 180.558594 C 70.367188 180.042969 70.738281 179.542969 71.132812 179.0625 C 71.527344 178.582031 71.941406 178.121094 72.382812 177.683594 C 72.820312 177.242188 73.28125 176.828125 73.761719 176.433594 C 74.242188 176.039062 74.742188 175.667969 75.257812 175.324219 C 75.773438 174.976562 76.308594 174.660156 76.855469 174.367188 C 77.402344 174.074219 77.964844 173.808594 78.539062 173.570312 C 79.113281 173.332031 79.695312 173.121094 80.292969 172.941406 C 80.886719 172.761719 81.488281 172.609375 82.097656 172.488281 C 82.707031 172.367188 83.320312 172.277344 83.941406 172.214844 C 84.558594 172.15625 85.179688 172.125 85.800781 172.125 C 86.421875 172.125 87.042969 172.15625 87.660156 172.214844 C 88.277344 172.277344 88.890625 172.367188 89.5 172.488281 C 90.113281 172.609375 90.714844 172.761719 91.308594 172.941406 C 91.902344 173.121094 92.488281 173.332031 93.0625 173.570312 C 93.636719 173.808594 94.195312 174.074219 94.746094 174.367188 C 95.292969 174.660156 95.824219 174.976562 96.34375 175.324219 C 96.859375 175.667969 97.355469 176.039062 97.835938 176.433594 C 98.316406 176.828125 98.777344 177.242188 99.21875 177.683594 C 99.65625 178.121094 100.074219 178.582031 100.46875 179.0625 C 100.863281 179.542969 101.230469 180.042969 101.578125 180.558594 C 101.921875 181.074219 102.242188 181.605469 102.535156 182.15625 C 102.828125 182.703125 103.09375 183.265625 103.332031 183.839844 C 103.570312 184.414062 103.777344 184.996094 103.957031 185.59375 C 104.136719 186.1875 104.289062 186.789062 104.410156 187.398438 C 104.53125 188.007812 104.621094 188.621094 104.683594 189.238281 C 104.746094 189.859375 104.773438 190.480469 104.773438 191.101562 Z M 104.773438 191.101562 " fillOpacity="1" fillRule="nonzero"/><path fill="#000000" d="M 165.148438 191.101562 C 165.148438 191.722656 165.121094 192.339844 165.058594 192.960938 C 164.996094 193.578125 164.90625 194.191406 164.785156 194.800781 C 164.664062 195.410156 164.511719 196.011719 164.332031 196.609375 C 164.152344 197.203125 163.945312 197.789062 163.707031 198.363281 C 163.46875 198.933594 163.203125 199.496094 162.910156 200.042969 C 162.617188 200.59375 162.296875 201.125 161.953125 201.640625 C 161.605469 202.160156 161.238281 202.65625 160.84375 203.136719 C 160.449219 203.617188 160.03125 204.078125 159.59375 204.515625 C 159.152344 204.957031 158.691406 205.375 158.210938 205.769531 C 157.730469 206.160156 157.234375 206.53125 156.71875 206.878906 C 156.199219 207.222656 155.667969 207.542969 155.121094 207.835938 C 154.570312 208.128906 154.011719 208.394531 153.4375 208.628906 C 152.863281 208.867188 152.277344 209.078125 151.683594 209.257812 C 151.089844 209.4375 150.488281 209.589844 149.875 209.710938 C 149.265625 209.832031 148.652344 209.921875 148.035156 209.984375 C 147.417969 210.042969 146.796875 210.074219 146.175781 210.074219 C 145.554688 210.074219 144.933594 210.042969 144.316406 209.984375 C 143.695312 209.921875 143.082031 209.832031 142.472656 209.710938 C 141.863281 209.589844 141.261719 209.4375 140.667969 209.257812 C 140.070312 209.078125 139.488281 208.867188 138.914062 208.628906 C 138.339844 208.394531 137.777344 208.128906 137.230469 207.835938 C 136.683594 207.542969 136.148438 207.222656 135.632812 206.878906 C 135.117188 206.53125 134.617188 206.160156 134.136719 205.769531 C 133.65625 205.375 133.195312 204.957031 132.757812 204.515625 C 132.316406 204.078125 131.902344 203.617188 131.507812 203.136719 C 131.113281 202.65625 130.742188 202.160156 130.398438 201.640625 C 130.050781 201.125 129.734375 200.59375 129.441406 200.042969 C 129.148438 199.496094 128.882812 198.933594 128.644531 198.363281 C 128.40625 197.789062 128.199219 197.203125 128.015625 196.609375 C 127.835938 196.011719 127.6875 195.410156 127.566406 194.800781 C 127.441406 194.191406 127.351562 193.578125 127.292969 192.960938 C 127.230469 192.339844 127.199219 191.722656 127.199219 191.101562 C 127.199219 190.480469 127.230469 189.859375 127.292969 189.238281 C 127.351562 188.621094 127.441406 188.007812 127.566406 187.398438 C 127.6875 186.789062 127.835938 186.1875 128.015625 185.59375 C 128.199219 184.996094 128.40625 184.414062 128.644531 183.839844 C 128.882812 183.265625 129.148438 182.703125 129.441406 182.15625 C 129.734375 181.605469 130.050781 181.074219 130.398438 180.558594 C 130.742188 180.042969 131.113281 179.542969 131.507812 179.0625 C 131.902344 178.582031 132.316406 178.121094 132.757812 177.683594 C 133.195312 177.242188 133.65625 176.828125 134.136719 176.433594 C 134.617188 176.039062 135.117188 175.667969 135.632812 175.324219 C 136.148438 174.976562 136.683594 174.660156 137.230469 174.367188 C 137.777344 174.074219 138.339844 173.808594 138.914062 173.570312 C 139.488281 173.332031 140.070312 173.121094 140.667969 172.941406 C 141.261719 172.761719 141.863281 172.609375 142.472656 172.488281 C 143.082031 172.367188 143.695312 172.277344 144.316406 172.214844 C 144.933594 172.15625 145.554688 172.125 146.175781 172.125 C 146.796875 172.125 147.417969 172.15625 148.035156 172.214844 C 148.652344 172.277344 149.265625 172.367188 149.875 172.488281 C 150.488281 172.609375 151.089844 172.761719 151.683594 172.941406 C 152.277344 173.121094 152.863281 173.332031 153.4375 173.570312 C 154.011719 173.808594 154.570312 174.074219 155.121094 174.367188 C 155.667969 174.660156 156.199219 174.976562 156.71875 175.324219 C 157.234375 175.667969 157.730469 176.039062 158.210938 176.433594 C 158.691406 176.828125 159.152344 177.242188 159.59375 177.683594 C 160.03125 178.121094 160.449219 178.582031 160.84375 179.0625 C 161.238281 179.542969 161.605469 180.042969 161.953125 180.558594 C 162.296875 181.074219 162.617188 181.605469 162.910156 182.15625 C 163.203125 182.703125 163.46875 183.265625 163.707031 183.839844 C 163.945312 184.414062 164.152344 184.996094 164.332031 185.59375 C 164.511719 186.1875 164.664062 186.789062 164.785156 187.398438 C 164.90625 188.007812 164.996094 188.621094 165.058594 189.238281 C 165.121094 189.859375 165.148438 190.480469 165.148438 191.101562 Z M 165.148438 191.101562 " fillOpacity="1" fillRule="nonzero"/><path fill="#000000" d="M 225.449219 191.101562 C 225.449219 191.722656 225.417969 192.339844 225.359375 192.960938 C 225.296875 193.578125 225.207031 194.191406 225.085938 194.800781 C 224.964844 195.410156 224.8125 196.011719 224.632812 196.609375 C 224.453125 197.203125 224.242188 197.789062 224.003906 198.363281 C 223.769531 198.933594 223.503906 199.496094 223.210938 200.042969 C 222.917969 200.59375 222.597656 201.125 222.253906 201.640625 C 221.90625 202.160156 221.535156 202.65625 221.144531 203.136719 C 220.75 203.617188 220.332031 204.078125 219.890625 204.515625 C 219.453125 204.957031 218.992188 205.375 218.511719 205.769531 C 218.03125 206.160156 217.535156 206.53125 217.015625 206.878906 C 216.5 207.222656 215.96875 207.542969 215.417969 207.835938 C 214.871094 208.128906 214.308594 208.394531 213.738281 208.628906 C 213.164062 208.867188 212.578125 209.078125 211.984375 209.257812 C 211.386719 209.4375 210.785156 209.589844 210.175781 209.710938 C 209.566406 209.832031 208.953125 209.921875 208.335938 209.984375 C 207.714844 210.042969 207.097656 210.074219 206.476562 210.074219 C 205.855469 210.074219 205.234375 210.042969 204.613281 209.984375 C 203.996094 209.921875 203.382812 209.832031 202.773438 209.710938 C 202.164062 209.589844 201.5625 209.4375 200.96875 209.257812 C 200.371094 209.078125 199.789062 208.867188 199.214844 208.628906 C 198.640625 208.394531 198.078125 208.128906 197.53125 207.835938 C 196.980469 207.542969 196.449219 207.222656 195.933594 206.878906 C 195.417969 206.53125 194.917969 206.160156 194.4375 205.769531 C 193.957031 205.375 193.496094 204.957031 193.058594 204.515625 C 192.617188 204.078125 192.203125 203.617188 191.808594 203.136719 C 191.414062 202.65625 191.042969 202.160156 190.699219 201.640625 C 190.351562 201.125 190.035156 200.59375 189.742188 200.042969 C 189.449219 199.496094 189.183594 198.933594 188.945312 198.363281 C 188.707031 197.789062 188.496094 197.203125 188.316406 196.609375 C 188.136719 196.011719 187.984375 195.410156 187.863281 194.800781 C 187.742188 194.191406 187.652344 193.578125 187.589844 192.960938 C 187.53125 192.339844 187.5 191.722656 187.5 191.101562 C 187.5 190.480469 187.53125 189.859375 187.589844 189.238281 C 187.652344 188.621094 187.742188 188.007812 187.863281 187.398438 C 187.984375 186.789062 188.136719 186.1875 188.316406 185.59375 C 188.496094 184.996094 188.707031 184.414062 188.945312 183.839844 C 189.183594 183.265625 189.449219 182.703125 189.742188 182.15625 C 190.035156 181.605469 190.351562 181.074219 190.699219 180.558594 C 191.042969 180.042969 191.414062 179.542969 191.808594 179.0625 C 192.203125 178.582031 192.617188 178.121094 193.058594 177.683594 C 193.496094 177.242188 193.957031 176.828125 194.4375 176.433594 C 194.917969 176.039062 195.417969 175.667969 195.933594 175.324219 C 196.449219 174.976562 196.980469 174.660156 197.53125 174.367188 C 198.078125 174.074219 198.640625 173.808594 199.214844 173.570312 C 199.789062 173.332031 200.371094 173.121094 200.96875 172.941406 C 201.5625 172.761719 202.164062 172.609375 202.773438 172.488281 C 203.382812 172.367188 203.996094 172.277344 204.613281 172.214844 C 205.234375 172.15625 205.855469 172.125 206.476562 172.125 C 207.097656 172.125 207.714844 172.15625 208.335938 172.214844 C 208.953125 172.277344 209.566406 172.367188 210.175781 172.488281 C 210.785156 172.609375 211.386719 172.761719 211.984375 172.941406 C 212.578125 173.121094 213.164062 173.332031 213.738281 173.570312 C 214.308594 173.808594 214.871094 174.074219 215.417969 174.367188 C 215.96875 174.660156 216.5 174.976562 217.015625 175.324219 C 217.535156 175.667969 218.03125 176.039062 218.511719 176.433594 C 218.992188 176.828125 219.453125 177.242188 219.890625 177.683594 C 220.332031 178.121094 220.75 178.582031 221.144531 179.0625 C 221.535156 179.542969 221.90625 180.042969 222.253906 180.558594 C 222.597656 181.074219 222.917969 181.605469 223.210938 182.15625 C 223.503906 182.703125 223.769531 183.265625 224.003906 183.839844 C 224.242188 184.414062 224.453125 184.996094 224.632812 185.59375 C 224.8125 186.1875 224.964844 186.789062 225.085938 187.398438 C 225.207031 188.007812 225.296875 188.621094 225.359375 189.238281 C 225.417969 189.859375 225.449219 190.480469 225.449219 191.101562 Z M 225.449219 191.101562 " fillOpacity="1" fillRule="nonzero"/></svg>
  ),
  gitHub: (props: LucideProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
}

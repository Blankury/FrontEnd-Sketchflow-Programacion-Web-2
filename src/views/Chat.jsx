import isotipo from "../assets/images/isotipo.png";
import logo from "../assets/images/sketchflow_logo.png";
import sketchflow from "../assets/images/sketchflow.png";

export function Chat() {
  return (

    <section className="chatcont">

      <div class="inbox_chat h-100 py-5 mt-2">
        <div class="recent_heading">
          <h4>Recientes</h4>
        </div>
        <div class="srch_bar">
          <div class="stylish-input-group">
            <input type="text" class="search-bar" placeholder="Search" />
            <span class="input-group-addon">
              <button type="button"> <i class="fa fa-search" aria-hidden="true"></i> </button>
            </span> </div>
        </div>
        <div class="chat_list active_chat">
          <div class="chat_people">
            <div class="chat_img"> <img src={logo} class="pfp" alt="User" /> </div>
            <div class="chat_ib">
              <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
              <p>Test, which is a new approach to have all solutions
                    astrology under one roof.</p>
            </div>
          </div>
        </div>
        <div class="chat_list">
          <div class="chat_people">
            <div class="chat_img"> <img src={logo} class="pfp" alt="User" /> </div>
            <div class="chat_ib">
              <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
              <p>Test, which is a new approach to have all solutions
                    astrology under one roof.</p>
            </div>
          </div>
        </div>
        <div class="chat_list">
          <div class="chat_people">
            <div class="chat_img"> <img src={logo} class="pfp" alt="User" /> </div>
            <div class="chat_ib">
              <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
              <p>Test, which is a new approach to have all solutions
                    astrology under one roof.</p>
            </div>
          </div>
        </div>
        <div class="chat_list">
          <div class="chat_people">
            <div class="chat_img"> <img src={logo} class="pfp" alt="User" /> </div>
            <div class="chat_ib">
              <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
              <p>Test, which is a new approach to have all solutions
                    astrology under one roof.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="msger py-3">
        <header className="msger-header ">
          <div className="msger-header-title">
            <div className="userName">
              <h6>
                Nombre del usuario</h6>
            </div>
          </div>
          <div className="msger-header-options">
            <span><i className="fas fa-cog" /></span>
          </div>
        </header>

        <main className="msger-chat">
          <div className="msg left-msg">
            <div
              className="msg-img"
              style={{ backgroundImage: logo }}
            ></div>

            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">BOT</div>
                <div className="msg-info-time">12:45</div>
              </div>

              <div className="msg-text">
                Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
              </div>
            </div>
          </div>

          <div className="msg right-msg">
            <div
              className="msg-img"
              style={{ backgroundImage: isotipo }}
            ></div>

            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">Sajad</div>
                <div className="msg-info-time">12:46</div>
              </div>

              <div className="msg-text">
                You can change your name in JS section!
              </div>
            </div>
          </div>
        </main>

        <form className="msger-inputarea">
          <input type="text" className="msger-input" placeholder="Enter your message..." />
          <button type="submit" className="msger-send-btn">Send</button>
        </form>
      </div>

    </section>



  );
}

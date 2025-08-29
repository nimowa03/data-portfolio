from apscheduler.schedulers.blocking import BlockingScheduler

def trading_cycle():
    # 실제 매수/매도 로직을 연결하세요 (포트폴리오 공개용)
    print("[Cycle] run... (stub)")

if __name__ == "__main__":
    print("[Scheduler] start")
    scheduler = BlockingScheduler()
    scheduler.add_job(trading_cycle, 'interval', minutes=1)
    try:
        scheduler.start()
    except (KeyboardInterrupt, SystemExit):
        print("[Scheduler] stop")